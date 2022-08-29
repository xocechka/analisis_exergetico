from models import Flujo, Proyecto
from schemas.flujo import FlujoCreate
from schemas.proyecto import ProyectoCreate, ProyectoUpdate
from sqlalchemy.orm import Session

from crud.crud_base import CreateSchemaType, CRUDBase, ModelType
from crud.crud_flujo import flujo as crud_flujo


class CRUDProyecto(CRUDBase[Proyecto, ProyectoCreate, ProyectoUpdate]):
    def create(self, db: Session, *, obj_in: CreateSchemaType) -> ModelType:
        flujo_entrada = crud_flujo.create(db=db, obj_in=FlujoCreate())
        flujo_salida = crud_flujo.create(db=db, obj_in=FlujoCreate())
        db_obj = self.model(**obj_in.dict())
        db_obj.id_flujo_entrada = flujo_entrada.id
        db_obj.id_flujo_salida = flujo_salida.id
        db.add(db_obj)
        db.commit()
        db.refresh(db_obj)
        return db_obj


proyecto = CRUDProyecto(Proyecto)
