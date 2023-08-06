from google.protobuf import empty_pb2 as _empty_pb2
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Optional as _Optional

DESCRIPTOR: _descriptor.FileDescriptor

class GetBookRequest(_message.Message):
    __slots__ = ["Name"]
    NAME_FIELD_NUMBER: _ClassVar[int]
    Name: str
    def __init__(self, Name: _Optional[str] = ...) -> None: ...

class Book(_message.Message):
    __slots__ = ["name"]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    def __init__(self, name: _Optional[str] = ...) -> None: ...
