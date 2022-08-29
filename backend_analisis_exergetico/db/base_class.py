from typing import Any

from fastapi_utils.camelcase import camel2snake
from sqlalchemy.ext.declarative import as_declarative, declared_attr


@as_declarative()
class Base:
    id: Any
    __name__: str

    # Generate __tablename__ automatically
    @declared_attr
    def __tablename__(cls) -> str:
        toSnakeCase = camel2snake(cls.__name__)
        return toSnakeCase.lower()
