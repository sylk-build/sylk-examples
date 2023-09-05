#!/bin/bash

if [[ $1 == "debug" ]]
then
	echo "Debug mode: $1"
	GRPC_VERBOSITY=DEBUG GRPC_TRACE=all node ./server/server.js
elif [[ $1 == "info" ]]
then
	echo "Info Mode: $1"
	GRPC_VERBOSITY=INFO GRPC_TRACE=all node ./server/server.js
else
	node ./server/server.js
fi