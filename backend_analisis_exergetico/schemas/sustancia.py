from fastapi_utils.api_model import APIModel


class SustanciaBase(APIModel):
    nombre: str
    exergia: float


class SustanciaCreate(SustanciaBase):
    pass


class SustanciaUpdate(SustanciaBase):
    pass


class Sustancia(SustanciaBase):
    id: int
