from datetime import datetime
from random import random
from clients.python import IotService_v1
from clients.python.protos.sylklabs.iot.v1.iot_pb2 import PublishRequest, SensorData
from google.protobuf.timestamp_pb2 import Timestamp
stub = IotService_v1(client_opt={
    'port': 48892,
    'host': 'localhost'
})
timestamp = Timestamp()
timestamp.FromDatetime(datetime.now())
events = stub.Publish(PublishRequest(
    topic='default',
    data=SensorData(
        sensor_id='1',
        timestamp=timestamp,
        value=100
    )
))