from typing import Any

import crud
from api.dependencies import get_db
from fastapi import APIRouter, Depends
from schemas import flujo as schemas
from sqlalchemy.orm import Session


router = APIRouter(
    prefix="/flujo",
    tags=["flujo"],
)


@router.get("/{id}", response_model=schemas.Flujo)
async def read_flujo(id: int, db: Session = Depends(get_db)) -> Any:
    return crud.flujo.get(db=db, id=id)


@router.get("/", response_model=list[schemas.Flujo])
async def read_flujos(db: Session = Depends(get_db)) -> Any:
    return crud.flujo.get_multi(db)


@router.post("/", response_model=schemas.Flujo)
async def create_flujo(flujo: schemas.FlujoCreate, db: Session = Depends(get_db)) -> Any:
    return crud.flujo.create(db=db, obj_in=flujo)


@router.put("/", response_model=schemas.Flujo)
async def update_flujo(flujo: schemas.FlujoUpdate, id: int, db: Session = Depends(get_db)) -> Any:
    return crud.flujo.update(db=db, obj_in=flujo, target_id=id)


@router.delete("/", response_model=schemas.Flujo)
async def delete_flujo(id: int, db: Session = Depends(get_db)) -> Any:
    return crud.flujo.remove(db=db, id=id)
