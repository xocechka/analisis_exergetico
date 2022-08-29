from sqlalchemy.orm import Session

from models import Flujo, Sustancia, SustanciaEnFlujo


def insertar_sustancias(db: Session):
    sustancias = [
        {
            "nombre": "agua",
            "exergia": "2",
        },
        {
            "nombre": "azúcar",
            "exergia": "31573280",
        },
        {
            "nombre": "calor",
            "exergia": "4",
        },
        {
            "nombre": "caramelo",
            "exergia": "2",
        },
        {
            "nombre": "residuos",
            "exergia": "31573280",
        },
        {
            "nombre": "vapor",
            "exergia": "4",
        },
    ]

    flujo_entrada = [
        {
            "id_sustancia": "1",
            "id_flujo": "1",
        },
        {
            "id_sustancia": "2",
            "id_flujo": "1",
        },
        {
            "id_sustancia": "3",
            "id_flujo": "1",
        },
    ]

    flujo_salida = [
        {
            "id_sustancia": "4",
            "id_flujo": "2",
        },
        {
            "id_sustancia": "5",
            "id_flujo": "2",
        },
        {
            "id_sustancia": "6",
            "id_flujo": "2",
        },
    ]

    # if(len(db.query(Flujo).all()) == 0):
    #     for i in range(2):
    #         element = Flujo()
    #         db.add(element)
    #         db.commit()
    #         db.refresh(element)

    # if(len(db.query(SustanciaEnFlujo).all()) == 0):
    #     for item in flujo_entrada:
    #         element = SustanciaEnFlujo(**item)
    #         db.add(element)
    #         db.commit()
    #         db.refresh(element)

    #     for item in flujo_salida:
    #         element = SustanciaEnFlujo(**item)
    #         db.add(element)
    #         db.commit()
    #         db.refresh(element)

    if(len(db.query(Sustancia).all()) == 0):
        for item in sustancias:
            element = Sustancia(**item)
            db.add(element)
            db.commit()
            db.refresh(element)
