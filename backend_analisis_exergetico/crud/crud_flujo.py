from models import Flujo
from schemas.flujo import FlujoCreate, FlujoUpdate

from crud.crud_base import CRUDBase


class CRUDFlujo(CRUDBase[Flujo, FlujoCreate, FlujoUpdate]):
    pass


flujo = CRUDFlujo(Flujo)
