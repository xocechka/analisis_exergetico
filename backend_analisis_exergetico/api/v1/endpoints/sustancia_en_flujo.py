from typing import Any

import crud
from api.dependencies import get_db
from fastapi import APIRouter, Depends
from schemas import sustancia_en_flujo as schemas
from sqlalchemy.orm import Session

router = APIRouter(
    prefix="/sustancia-en-flujo",
    tags=["sustancia-en-flujo"],
)


@router.get("/", response_model=schemas.SustanciaEnFlujo)
async def read_sustancia_en_flujo(
    id: int,
    db: Session = Depends(get_db)
) -> Any:
    return crud.sustancia_en_flujo.get(db=db, id=id)


@router.get("/", response_model=list[schemas.SustanciaEnFlujo])
async def read_sustancia_en_flujos(db: Session = Depends(get_db)) -> Any:
    return crud.sustancia_en_flujo.get_multi(db)


@router.post("/", response_model=schemas.SustanciaEnFlujo)
async def create_sustancia_en_flujo(
    sustancia_en_flujo: schemas.SustanciaEnFlujoCreate,
    db: Session = Depends(get_db)
) -> Any:
    return crud.sustancia_en_flujo.create(db=db, obj_in=sustancia_en_flujo)


@router.put("/", response_model=schemas.SustanciaEnFlujo)
async def update_sustancia_en_flujo(
    sustancia_en_flujo: schemas.SustanciaEnFlujoUpdate,
    id: int,
    db: Session = Depends(get_db)
) -> Any:
    return crud.sustancia_en_flujo.update(
        obj_in=sustancia_en_flujo,
        target_id=id,
        db=db
    )


@router.delete("/", response_model=schemas.SustanciaEnFlujo)
async def delete_sustancia_en_flujo(
    id: int,
    db: Session = Depends(get_db)
) -> Any:
    return crud.sustancia_en_flujo.remove(
        id=id,
        db=db
    )
