from clients.python import IotService_v1
from clients.python.protos.sylklabs.iot.v1.iot_pb2 import Topic

stub = IotService_v1(client_opt={
    'port': 50001
})
events = stub.Subscribe(Topic(
    name='default'
))

for evt in events:
    print(evt)