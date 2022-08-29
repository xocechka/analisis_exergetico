from models import Sustancia
from schemas.sustancia import SustanciaCreate, SustanciaUpdate

from crud.crud_base import CRUDBase


class CRUDSustancia(CRUDBase[Sustancia, SustanciaCreate, SustanciaUpdate]):
    pass


sustancia = CRUDSustancia(Sustancia)
