from fastapi import FastAPI, Depends, HTTPException
from contextlib import asynccontextmanager
from product_service import crud,db, schema
from typing_extensions import Annotated
from sqlmodel import Field, Session, SQLModel, select






@asynccontextmanager
async def lifespan(app: FastAPI):
    print("Creating database connection")
    db.create_db_and_tables()
    yield







app=FastAPI()


@app.get("/product", response_model=list[schema.Product])
async def get_all_product(session:Annotated[Session, Depends(db.get_session)]):
      allProduct=session.exec(select(schema.Product)).all()
      return allProduct


@app.post("/product")
async def create_product():
     pass


@app.put("/product{id}")
async def edit_product(todo:schema.Product,session:Annotated[Session, Depends(db.get_session)] ):
     exesting_product=session.exec(select(schema.Product).where(schema.Product.product_id==id)).first()
     if exesting_product:
          exesting_product.product_name = todo.product_name
          exesting_product.product_price=todo.product_price
          exesting_product.product_quantity=todo.product_quantity
          exesting_product.product_category=todo.product_category
          session.add(exesting_product)
          session.commit()
          session.refresh(exesting_product)
          return exesting_product
     else:
          HTTPException(status_code=400, detail="product not found")

@app.delete("/product{id}")
async def edit_product(id:int,session:Annotated[Session, Depends(db.get_session)] ):
     exesting_product=session.exec(select(schema.Product).where(schema.Product.product_id==id)).first()
     if exesting_product:
          session.delete(exesting_product)
          session.commit()
          session.refresh(exesting_product)
          return {"message":"sucessfuly delte product"}
     else:
          HTTPException(status_code=400, detail="product not found")

