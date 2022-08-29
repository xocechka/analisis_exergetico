from typing import Any

from fastapi.encoders import jsonable_encoder
from models import SustanciaEnFlujo
from schemas.sustancia_en_flujo import (SustanciaEnFlujoCreate,
                                        SustanciaEnFlujoUpdate)
from sqlalchemy.orm import Session

from crud.crud_base import CRUDBase, ModelType, UpdateSchemaType


class CRUDSustanciaEnFlujo(CRUDBase[SustanciaEnFlujo, SustanciaEnFlujoCreate, SustanciaEnFlujoUpdate]):
    pass


sustancia_en_flujo = CRUDSustanciaEnFlujo(SustanciaEnFlujo)
