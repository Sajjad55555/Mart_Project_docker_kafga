from aiokafka import AIOKafkaProducer, AIOKafkaConsumer
from user_service.app import settings
from jose import jwt, JWTError
from datetime import datetime, timedelta
from user_service.app import userinfo_pb2


ALGORITHM = "HS256"
SECRET_KEY = "A Secure Secret Key"

async def get_kafka_producer():
    producer = AIOKafkaProducer(bootstrap_servers='broker:19092')
    await producer.start()
    try:
        yield producer
    finally:
        await producer.stop()



async def consume_messages(topic, bootstrap_servers):
    # Create a consumer instance.
    consumer = AIOKafkaConsumer(
        topic,
        bootstrap_servers=bootstrap_servers,
        group_id="my-group",
        auto_offset_reset='earliest'
    )

    # Start the consumer.
    await consumer.start()
    try:
        # Continuously listen for messages.
        async for message in consumer:
            deserialized_data = userinfo_pb2.UserInformation()
            deserialized_data.ParseFromString(message.value)
            print(f"\n\n Consumer Deserialized data: {deserialized_data}")
            # print(f"Received message: {message.value.decode()} on topic {message.topic}")
            # Here you can add code to process each message.
            # Example: parse the message, store it in a database, etc.
    finally:
        # Ensure to close the consumer when done.
        await consumer.stop()

# JWT token generation function
def create_access_token(subject: str, expires_delta: timedelta = timedelta(minutes=15)) -> str:
    expire = datetime.utcnow() + expires_delta
    to_encode = {"exp": expire, "sub": subject}
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt       

# async def signup_user(user: UserCreate, db: Session, producer: Annotated[AIOKafkaProducer, Depends(produce_message)]) -> User:
#     """
#     Create a new user.
#     Args:
#         user (UserCreate): The user data.
#         db (Session): The database session.
#     Returns:
#         User: The user object.
#     """
#     search_user_by_email = db.exec(select(User).where(User.email == user.email)).first()
#     if search_user_by_email:
#         raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail="Email id already registered")
    
#     search_user_by_username = db.exec(select(User).where(User.username == user.username)).first()
#     if search_user_by_username:
#         raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail="Try Different username")
    
#     hashed_password = get_password_hash(user.password)

#     new_user = User(id = uuid4(), username=user.username, email=user.email, password=hashed_password, role=user.role)
#     add_consumer_to_kong(new_user.username)
#     user_data = user_pb2.User(username=new_user.username, email=new_user.email)
#     serialized_user = user_data.SerializeToString()
#     await producer.send_and_wait(settings.KAFKA_PRODUCER_TOPIC, serialized_user)

#     db.add(new_user)
#     db.commit()
#     db.refresh(new_user)

#     return new_user