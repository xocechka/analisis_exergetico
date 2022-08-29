from db.base_class import Base
from sqlalchemy import Column, ForeignKey, Integer
from sqlalchemy.orm import relationship
from utils.get_model import get_model

from models.sustancia import Sustancia


class SustanciaEnFlujo(Base):
    id = Column(Integer, primary_key=True, index=True)
    id_flujo = Column(ForeignKey("flujo.id"))
    id_sustancia = Column(ForeignKey("sustancia.id"), nullable=True)
    sustancia = relationship("Sustancia")
