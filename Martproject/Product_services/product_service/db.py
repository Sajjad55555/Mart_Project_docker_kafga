from contextlib import asynccontextmanager
from sqlmodel import SQLModel, create_engine, Session, select
from fastapi import FastAPI
from product_service import settings

connection_string = str(settings.DATABASE_URL)
engine = str(connection_string).replace(
    "postgresql", "postgresql+psycopg2"
)

# Create the tables
def create_db_and_tables():
    SQLModel.metadata.create_all(engine)

@asynccontextmanager
async def lifespan(app: FastAPI):
    print("Creating database connection")
    create_db_and_tables()
    yield

def get_session():
    with Session(engine) as session:
        yield session