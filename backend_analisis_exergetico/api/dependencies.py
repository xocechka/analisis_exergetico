from typing import Generator

from db.session import SessionLocal
from sqlalchemy.orm import Session


def get_db() -> Generator:
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


