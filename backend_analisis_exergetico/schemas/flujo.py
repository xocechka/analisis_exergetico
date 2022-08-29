from fastapi_utils.api_model import APIModel

from schemas.sustancia_en_flujo import SustanciaEnFlujo


class FlujoBase(APIModel):
    pass


class FlujoCreate(FlujoBase):
    pass


class FlujoUpdate(FlujoBase):
    pass


class Flujo(FlujoBase):
    id: int
    sustancias: list[SustanciaEnFlujo]
