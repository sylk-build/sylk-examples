#!/bin/bash

declare -a services=("protos")
echo "[sylk.build] init-py.sh starting protoc compiler"
DESTDIR="./protos"
for SERVICE in "${services[@]}"; do
    python3 -m grpc_tools.protoc --proto_path=$SERVICE/ --python_out=$DESTDIR --grpc_python_out=$DESTDIR $SERVICE/*.proto
done
statuscode=$?
echo "Exit code for python protoc -> "$statuscode
exit 0