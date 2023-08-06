#!/bin/bash

if [[ $1 == "debug" ]]
then
	echo "Debug Mode: $1"
	GRPC_VERBOSITY=DEBUG GRPC_TRACE=all PYTHONPATH=./services:./:./services/protos python3 server/server.py
elif [[ $1 == "info" ]]
then
	echo "Info Mode: $1"
	GRPC_VERBOSITY=INFO GRPC_TRACE=all PYTHONPATH=./services:./:./services/protos python3 server/server.py
else
	PYTHONPATH=./services:./:./services/protos python3 server/server.py
fi