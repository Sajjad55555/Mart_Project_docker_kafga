from starlette.config import Config
from starlette.datastructures import Secret

try:
    config = Config(".env")
except FileNotFoundError:
    config = Config()

DATABASE_URL = config("DATABASE_URL", cast=Secret)
KAFAKA_SERVER = config("KAFAKA_SERVER", cast=Secret)
KAFKA_TOPIC = config("KAFKA_TOPIC", cast=Secret)
KAGKA_CONSUMER_GROPID_FOR_USERINFORMATION = config("KAGKA_CONSUMER_GROPID_FOR_USERINFORMATION", cast=Secret)

TEST_DATABASE_URL = config("TEST_DATABASE_URL", cast=Secret)