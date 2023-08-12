#!/bin/bash

if [[ $1 == "debug" ]]
then
	echo "Debug mode: $1"
	GRPC_VERBOSITY=DEBUG GRPC_TRACE=all go run ./server/server.go
elif [[ $1 == "info" ]]
then
	echo "Info Mode: $1"
	GRPC_VERBOSITY=INFO GRPC_TRACE=all go run ./server/server.go
else
	go run ./server/server.go
fi