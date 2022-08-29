from db.base_class import Base
from sqlalchemy import Column, Integer
from sqlalchemy.orm import relationship
from utils.get_model import get_model

from models.sustancia_en_flujo import SustanciaEnFlujo


class Flujo(Base):
    id = Column(Integer, primary_key=True, index=True)
    sustancias = relationship(get_model(SustanciaEnFlujo),
                              cascade="all, delete-orphan")
