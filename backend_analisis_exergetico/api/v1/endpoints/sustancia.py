from typing import Any
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

import crud
from api.dependencies import get_db
from schemas import sustancia as schemas

router = APIRouter(
    prefix="/sustancia",
    tags=["sustancia"],
)


@router.get("/{id}", response_model=schemas.Sustancia)
async def read_sustancia(id: int, db: Session = Depends(get_db)) -> Any:
    return crud.sustancia.get(db=db, id=id)


@router.get("/", response_model=list[schemas.Sustancia])
async def read_sustancias(db: Session = Depends(get_db)) -> Any:
    return crud.sustancia.get_multi(db)


@router.post("/", response_model=schemas.Sustancia)
async def create_sustancia(sustancia: schemas.SustanciaCreate, db: Session = Depends(get_db)) -> Any:
    return crud.sustancia.create(db=db, obj_in=sustancia)


@router.put("/", response_model=schemas.Sustancia)
async def update_sustancia(sustancia: schemas.SustanciaUpdate, id: int, db: Session = Depends(get_db)) -> Any:
    return crud.sustancia.update(db=db, obj_in=sustancia, target_id=id)


@router.delete("/", response_model=schemas.Sustancia)
async def delete_sustancia(id: int, db: Session = Depends(get_db)) -> Any:
    return crud.sustancia.remove(db=db, id=id)
