from typing import Any

import crud
from api.dependencies import get_db
from fastapi import APIRouter, Depends
from schemas import proyecto as schemas
from sqlalchemy.orm import Session

router = APIRouter(
    prefix="/proyecto",
    tags=["proyecto"],
)


@router.get("/{id}", response_model=schemas.Proyecto)
async def read_proyecto(id: int, db: Session = Depends(get_db)) -> Any:
    return crud.proyecto.get(db=db, id=id)


@router.get("/", response_model=list[schemas.Proyecto])
async def read_proyectos(db: Session = Depends(get_db)) -> Any:
    return crud.proyecto.get_multi(db)


@router.post("/", response_model=schemas.Proyecto)
async def create_proyecto(proyecto: schemas.ProyectoCreate, db: Session = Depends(get_db)) -> Any:
    return crud.proyecto.create(db=db, obj_in=proyecto)


@router.put("/", response_model=schemas.Proyecto)
async def update_proyecto(proyecto: schemas.ProyectoUpdate, id: int, db: Session = Depends(get_db)) -> Any:
    return crud.proyecto.update(db=db, obj_in=proyecto, target_id=id)


@router.delete("/", response_model=schemas.Proyecto)
async def delete_proyecto(id: int, db: Session = Depends(get_db)) -> Any:
    return crud.proyecto.remove(db=db, id=id)
