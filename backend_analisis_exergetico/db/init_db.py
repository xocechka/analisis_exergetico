from init import insertar_sustancias

from db.base_class import Base
from db.session import SessionLocal, engine


def init_db() -> None:
    Base.metadata.create_all(bind=engine)

    insertar_sustancias(SessionLocal())
