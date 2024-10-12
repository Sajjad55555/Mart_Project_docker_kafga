from fastapi import FastAPI, Depends, HTTPException
from jose import jwt, JWTError
from datetime import datetime, timedelta
from fastapi.security import OAuth2PasswordRequestForm
from typing import Optional
from typing_extensions import Annotated
from sqlmodel import Field, Session, SQLModel, create_engine, select

# Configuration for JWT
ALGORITHM = "HS256"
SECRET_KEY = "A Secure Secret Key"

# Database connection string and engine
connection_string = "postgresql://ziakhan:my_password@postgres_db:5432/mydatabase"
connection = str(connection_string).replace(
    "postgresql", "postgresql+psycopg2"
)
engine = create_engine(connection)

# Database model for user information
class UserInformation(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    username: str  # Add username field for authentication
    password: str  # Add password field for authentication

# Function to create database and tables
def create_db_and_tables():
    # SQLModel.metadata.drop_all(engine)  # Drop existing tables
    SQLModel.metadata.create_all(engine)  # Create new tables

# JWT token generation function
def create_access_token(subject: str, expires_delta: timedelta = timedelta(minutes=15)) -> str:
    expire = datetime.utcnow() + expires_delta
    to_encode = {"exp": expire, "sub": subject}
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

# Initialize FastAPI app and create database tables
app = FastAPI()
create_db_and_tables()

# Endpoint to save user information in the database
@app.post("/save_user")
def save_user(username: str, password: str):
    user_info = UserInformation(username=username, password=password)
    with Session(engine) as session:
        session.add(user_info)
        session.commit()
        session.refresh(user_info)
    return {"message": "User saved successfully", "user": user_info}

# Login endpoint to authenticate users
@app.post("/login")
def login(user_data: Annotated[OAuth2PasswordRequestForm, Depends()]):
    with Session(engine) as session:
        # Fetch user from database
        statement = select(UserInformation).where(UserInformation.username == user_data.username)
        user_in_db = session.exec(statement).first()
    
    if not user_in_db or user_data.password != user_in_db.password:
        raise HTTPException(status_code=400, detail="Incorrect username or password")

    token = create_access_token(subject=user_data.username)
    return {"username": user_data.username, "access_token": token}

# chek funcation Token generation endpoint
# @app.get("/token")
# def get_token(name: str):
#     token = create_access_token(subject=name)
#     return {"access_token": token}
