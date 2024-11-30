from fastapi import APIRouter
from typing_extensions import Annotated
# from user_service.app.model import Register_User_Form
from fastapi import FastAPI, Depends, Form, HTTPException



user_router = APIRouter(
    prefix="/user",
    tags=["user"],
    responses={404:{"description":"user not found"}}
)



@user_router.get("/")
async def read_user():
    pass


@user_router.post("/regiter_user")
async def register_user():
    pass



