from fastapi import FastAPI, Depends, HTTPException
from jose import jwt, JWTError
from datetime import datetime, timedelta
from fastapi.security import OAuth2PasswordRequestForm
from typing import Optional,AsyncGenerator
from typing_extensions import Annotated
from sqlmodel import Field, Session, SQLModel, create_engine, select
from user_service import settings,crud,db
from aiokafka import AIOKafkaProducer, AIOKafkaConsumer
import asyncio
import json
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

async def lifespan(app: FastAPI)-> AsyncGenerator[None, None]:
    print("Creating tables..")
    # loop.run_until_complete(consume_messages('todos', 'broker:19092'))
    task = asyncio.create_task(crud.consume_messages('todos', 'broker:19092'))
    db.create_db_and_tables()
    yield   


# Initialize FastAPI app and create database tables
app = FastAPI()
@app.post("/signup", response_model=UserInformation)
async def create_user(user: UserInformation, session: Annotated[Session, Depends(db.get_session)], producer: Annotated[AIOKafkaProducer, Depends(crud.get_kafka_producer)]):
    # user.password = hash_password(user.password)  # Hash the password before saving
    user_info = {field: getattr(user, field) for field in user.dict()}
    user_json = json.dumps(user_info).encode("utf-8")
    await producer.send_and_wait("todos", user_json)
    session.add(user)
    session.commit()
    session.refresh(user)
    return {"message": "User saved successfully", "user": user}

# Login endpoint to authenticate users
@app.post("/login")
def login(user_data: Annotated[OAuth2PasswordRequestForm, Depends()]):
    with Session(engine) as session:
        # Fetch user from database
        statement = select(UserInformation).where(UserInformation.username == user_data.username)
        user_in_db = session.exec(statement).first()
    
    if not user_in_db or user_data.password != user_in_db.password:
        raise HTTPException(status_code=400, detail="Incorrect username or password")

    token = crud.create_access_token(subject=user_data.username)
    return {"username": user_data.username, "access_token": token}

# chek funcation Token generation endpoint
# @app.get("/token")
# def get_token(name: str):
#     token = create_access_token(subject=name)
#     return {"access_token": token}
