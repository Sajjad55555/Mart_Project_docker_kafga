from aiokafka import AIOKafkaProducer, AIOKafkaConsumer
from product_service import settings
from jose import jwt, JWTError
from datetime import datetime, timedelta
# from user_service.app import userinfo_pb2


ALGORITHM = "HS256"
SECRET_KEY = "A Secure Secret Key"

# async def get_kafka_producer():
#     producer = AIOKafkaProducer(bootstrap_servers='broker:19092')
#     await producer.start()
#     try:
#         yield producer
#     finally:
#         await producer.stop()



# async def consume_messages(topic, bootstrap_servers):
#     # Create a consumer instance.
#     consumer = AIOKafkaConsumer(
#         topic,
#         bootstrap_servers=bootstrap_servers,
#         group_id="my-group",
#         auto_offset_reset='earliest'
#     )

#     # Start the consumer.
#     await consumer.start()
#     try:
#         # Continuously listen for messages.
#         async for message in consumer:
#             deserialized_data = userinfo_pb2.UserInformation()
#             deserialized_data.ParseFromString(message.value)
#             print(f"\n\n Consumer Deserialized data: {deserialized_data}")
#             # print(f"Received message: {message.value.decode()} on topic {message.topic}")
#             # Here you can add code to process each message.
#             # Example: parse the message, store it in a database, etc.
#     finally:
#         # Ensure to close the consumer when done.
#         await consumer.stop() 

# JWT token generation function
def create_access_token(subject: str, expires_delta: timedelta = timedelta(minutes=15)) -> str:
    expire = datetime.utcnow() + expires_delta
    to_encode = {"exp": expire, "sub": subject}
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt       

