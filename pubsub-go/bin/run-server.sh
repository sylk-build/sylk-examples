#!/bin/bash

if [[ $1 == "debug" ]]
then
	echo "Debug mode: $1"
	GRPC_VERBOSITY=DEBUG GRPC_TRACE=all ngo run ./server/server.go
else
go run ./server/server.go
fi