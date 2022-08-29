class Settings():
    API_TITLE = "HumanResources"
    API_V1_STR: str = "/api/v1"
    SQLALCHEMY_DATABASE_URL: str = "sqlite:///./sql_app.db"
    SQLALCHEMY_TEST_DATABASE_URL: str = "sqlite:///./test.db"
    CAMEL_CASE_RESPONSES: bool = True


settings = Settings()
