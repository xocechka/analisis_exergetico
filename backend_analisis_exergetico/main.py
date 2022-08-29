from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from api.v1.api import app_router
from core.config import settings
from db.init_db import init_db

# App Initialization
app = FastAPI(
    openapi_url=f"{settings.API_V1_STR}/openapi.json",
    title=settings.API_TITLE
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Use api router
app.include_router(app_router)


@app.on_event("startup")
def startup():
    init_db()
