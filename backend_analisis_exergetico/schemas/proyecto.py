from fastapi_utils.api_model import APIModel

from schemas.flujo import Flujo


class ProyectoBase(APIModel):
    nombre: str
    descripcion: str
    id_flujo_entrada: int | None
    id_flujo_salida: int | None


class ProyectoCreate(ProyectoBase):
    pass


class ProyectoUpdate(ProyectoBase):
    pass


class Proyecto(ProyectoBase):
    id: int
    flujo_entrada: Flujo | None
    flujo_salida: Flujo | None
