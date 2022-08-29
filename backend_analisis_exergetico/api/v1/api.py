from fastapi import APIRouter

from api.v1.endpoints import flujo, proyecto, sustancia, sustancia_en_flujo

app_router = APIRouter()
app_router.include_router(sustancia_en_flujo.router)
# app_router.include_router(flujo.router)
app_router.include_router(proyecto.router)
app_router.include_router(sustancia.router)
