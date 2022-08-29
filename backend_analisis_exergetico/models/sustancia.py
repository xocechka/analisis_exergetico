from db.base_class import Base
from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship


class Sustancia(Base):
    id = Column(Integer, primary_key=True, index=True)
    nombre = Column(String, nullable=False)
    exergia = Column(Integer, nullable=False)
