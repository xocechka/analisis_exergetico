from fastapi_utils.api_model import APIModel

from schemas.sustancia import Sustancia


class SustanciaEnFlujoBase(APIModel):
    id_flujo: int
    id_sustancia: int | None


class SustanciaEnFlujoCreate(SustanciaEnFlujoBase):
    pass


class SustanciaEnFlujoUpdate(SustanciaEnFlujoBase):
    pass


class SustanciaEnFlujo(SustanciaEnFlujoBase):
    id: int
    sustancia: Sustancia | None
