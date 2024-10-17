# from sqlmodel import Field, Session, SQLModel, create_engine, select
# from typing import Optional



# class UserInformation(SQLModel, table=True):
#     id: Optional[int] = Field(default=None, primary_key=True)
#     username: str  # Add username field for authentication
#     password: str  # Add password field for authentication
#     email=str


from fastapi import FastAPI, Depends, HTTPException
from jose import jwt, JWTError
from datetime import datetime, timedelta
from fastapi.security import OAuth2PasswordRequestForm
from typing import Optional, AsyncGenerator
from typing_extensions import Annotated
from sqlmodel import Field, Session, SQLModel, create_engine, select
from user_service import settings, crud
from aiokafka import AIOKafkaProducer, AIOKafkaConsumer
import asyncio
import json
from passlib.context import CryptContext

# Configuration for JWT
ALGORITHM = "HS256"
SECRET_KEY = settings.SECRET_KEY  # Load secret key from settings/environment
ACCESS_TOKEN_EXPIRE_MINUTES = 15

# Password hashing configuration
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# Database connection string and engine
connection = str(settings.DATABASE_URL).replace("postgresql", "postgresql+psycopg2")
engine = create_engine(connection)

# Database model for user information
class UserInformation(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    username: str
    password: str  # Hashed password will be stored

# Function to create database and tables
# def create_db_and_tables():
#     SQLModel.metadata.create_all(engine)

async def lifespan(app: FastAPI) -> AsyncGenerator[None, None]:
    task = asyncio.create_task(crud.consume_messages('todos', 'broker:19092'))
    create_db_and_tables()
    yield

# Password hashing functions
def hash_password(password: str) -> str:
    return pwd_context.hash(password)

def verify_password(plain_password: str, hashed_password: str) -> bool:
    return pwd_context.verify(plain_password, hashed_password)

# JWT token generation function
def create_access_token(subject: str, expires_delta: timedelta = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)) -> str:
    expire = datetime.utcnow() + expires_delta
    to_encode = {"exp": expire, "sub": subject}
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

# Initialize FastAPI app
app = FastAPI()

# Session dependency
def get_session():
    with Session(engine) as session:
        yield session

# Endpoint to save user information in the database
@app.post("/signup", response_model=UserInformation)
async def create_user(user: UserInformation, session: Annotated[Session, Depends(get_session)], producer: Annotated[AIOKafkaProducer, Depends(crud.get_kafka_producer)]):
    user.password = hash_password(user.password)  # Hash the password before saving
    user_info = {field: getattr(user, field) for field in user.dict()}
    user_json = json.dumps(user_info).encode("utf-8")
    await producer.send_and_wait("todos", user_json)

    # Use the injected session
    session.add(user)
    session.commit()
    session.refresh(user)
    
    return {"message": "User saved successfully", "user": user}

# Login endpoint to authenticate users
@app.post("/login")
def login(user_data: Annotated[OAuth2PasswordRequestForm, Depends()], session: Annotated[Session, Depends(get_session)]):
    # Fetch user from database
    statement = select(UserInformation).where(UserInformation.username == user_data.username)
    user_in_db = session.exec(statement).first()
    
    # Verify password and raise exception if incorrect
    if not user_in_db or not verify_password(user_data.password, user_in_db.password):
        raise HTTPException(status_code=400, detail="Incorrect username or password")

    # Generate access token
    token = create_access_token(subject=user_data.username)
    return {"username": user_data.username, "access_token": token}

# Token validation function
def validate_token(token: str):
    credentials_exception = HTTPException(
        status_code=401,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            raise credentials_exception
    except JWTError:
        raise credentials_exception

# Example endpoint to use the token (optional)
@app.get("/secure-endpoint")
def secure_endpoint(token: str):
    validate_token(token)
    return {"message": "This is a secure endpoint!"}
