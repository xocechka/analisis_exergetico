from db.base_class import Base
from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from utils.get_model import get_model

from models.flujo import Flujo


class Proyecto(Base):
    id = Column(Integer, primary_key=True, index=True)
    nombre = Column(String, nullable=False)
    descripcion = Column(String, nullable=True)

    id_flujo_entrada = Column(ForeignKey("flujo.id"), nullable=True)
    id_flujo_salida = Column(ForeignKey("flujo.id"), nullable=True)

    flujo_entrada = relationship(
        get_model(Flujo),
        foreign_keys=[id_flujo_entrada]
    )
    flujo_salida = relationship(
        get_model(Flujo),
        foreign_keys=[id_flujo_salida]
    )
