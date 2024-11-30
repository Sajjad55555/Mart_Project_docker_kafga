from passlib.context import CryptContext
from sqlmodel import Session,select
from typing import Annotated
from user_service.app.db import get_session
from fastapi import Depends
from user_service.app.model import New_User



# pwd_context=CryptContext(schemes="bcrypt")
# def hash_password(password):
#     return pwd_context.hash(password)


# def get_user_from_db(session:Annotated[Session, Depends(get_session)], username:str, email:str):
#     statement = select(New_User).where(New_User.username==username)
#     user = session.exec(statement).first()
#     if not user:
#         statement = select(New_User).where(New_User.email==email)
#         user =session.exec(statement).first()
#         if user:
#             return user
#     return user