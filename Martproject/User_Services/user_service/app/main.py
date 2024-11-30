from fastapi import FastAPI, Depends, HTTPException
from jose import jwt, JWTError
from datetime import datetime, timedelta
from fastapi.security import OAuth2PasswordRequestForm
from typing import Optional,AsyncGenerator
from typing_extensions import Annotated
from sqlmodel import Field, Session, SQLModel, create_engine, select
from user_service.app import crud,db, userinfo_pb2
from aiokafka import AIOKafkaProducer, AIOKafkaConsumer
from pydantic import BaseModel
import asyncio
from contextlib import asynccontextmanager
import json
import logging
from user_service.app.userrouter import user_router
from user_service.app import userinfo_pb2
logging.basicConfig(level=logging.DEBUG)
# Configuration for JWT
ALGORITHM = "HS256"
SECRET_KEY = "A Secure Secret Key"

# Database connection string and engine
connection_string = "postgresql://ziakhan:my_password@postgres_db:5432/mydatabase"
connection = str(connection_string).replace(
    "postgresql", "postgresql+psycopg2"
)
engine = create_engine(connection,connect_args={"sslmode":"require"},pool_recycle=300,pool_size=10)

# Database model for user information
class UserInformation(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    username: str  # Add username field for authentication
    password: str  # Add password field for authentication

@asynccontextmanager
async def lifespan(app: FastAPI)-> AsyncGenerator[None, None]:
    print("Creating tables..")
    # loop.run_until_complete(consume_messages('todos', 'broker:19092'))
    task = asyncio.create_task(crud.consume_messages('todos', 'broker:19092'))
    db.create_db_and_tables()
    yield   

app = FastAPI(lifespan=lifespan,
              title="Hello Kafka With FastAPI",
              version="0.0.1",
              )

app.include_router(router=user_router)

@app.post("/signup", response_model=UserInformation)
async def create_user(user: UserInformation, session: Annotated[Session, Depends(db.get_session)], producer: Annotated[AIOKafkaProducer, Depends(crud.get_kafka_producer)]):
    userinfo_protbuf = userinfo_pb2.UserInformation(id=user.id, username=user.username,password=user.password)
     # Serialize the message to a string
    serialized_userinfo = userinfo_protbuf.SerializeToString()
    # print(f"Serialized data: {serialized_userinfo}")
    await producer.send_and_wait("todos", serialized_userinfo)
    return {"message": "User saved successfully", "user": user}
# @app.post("/signup", response_model=UserInformation)
# async def create_user(user: UserInformation, session: Annotated[Session, Depends(db.get_session)], producer: Annotated[AIOKafkaProducer, Depends(crud.get_kafka_producer)]):
#     # user.password = hash_password(user.password)  # Hash the password before saving
#     user_info = {field: getattr(user, field) for field in user.dict()}
#     user_json = json.dumps(user_info).encode("utf-8")
#     await producer.send_and_wait("todos", user_json)
#     session.add(user)
#     session.commit()
#     session.refresh(user)
#     return {"message": "User saved successfully", "user": user}

# Login endpoint to authenticate users
# @app.post("/login")
# def login(user_data: Annotated[OAuth2PasswordRequestForm, Depends()]):
#     with Session(engine) as session:
#         # Fetch user from database
#         statement = select(UserInformation).where(UserInformation.username == user_data.username)
#         user_in_db = session.exec(statement).first()
    
#     if not user_in_db or user_data.password != user_in_db.password:
#         raise HTTPException(status_code=400, detail="Incorrect username or password")

#     token = crud.create_access_token(subject=user_data.username)
#     return {"username": user_data.username, "access_token": token}
@app.get("/all_users", response_model=list[UserInformation])
async def get_all_users(session: Annotated[Session, Depends(db.get_session)] ):
     statement=select(UserInformation)
     all_users=session.exec(select(UserInformation)).all()
     return all_users

from fastapi import HTTPException

@app.delete("/user/{id}")
async def delete_product(id: int, session: Annotated[Session, Depends(db.get_session)]):
    existing_product = session.exec(select(UserInformation).where(UserInformation.id == id)).first()
    if existing_product:
        session.delete(existing_product)
        session.commit()
        return {"message": "successfully deleted user"}
    else:
        raise HTTPException(status_code=400, detail="user not found")


@app.put("/user/{id}")
async def update_user(
    id: int,
    user_update: UserInformation,
    session: Annotated[Session, Depends(db.get_session)]
):
    existing_user = session.exec(select(UserInformation).where(UserInformation.id == id)).first()
    
    if not existing_user:
        raise HTTPException(status_code=404, detail="User not found")
    
    # Update only the provided fields
    for key, value in user_update.dict(exclude_unset=True).items():
        setattr(existing_user, key, value)
    
    session.add(existing_user)
    session.commit()
    session.refresh(existing_user)
    
    return {"message": "User successfully updated", "user": existing_user}


# chek funcation Token generation endpoint
# @app.get("/token")
# def get_token(name: str):
#     token = create_access_token(subject=name)
#     return {"access_token": token}
