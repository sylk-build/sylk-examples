#!/bin/bash

echo "[sylk.build] init.sh starting protoc compiler for Go"
go get -u google.golang.org/protobuf
go get -u google.golang.org/grpc
SRC_DIR="protos"
DST_DIR="services/protos"
mkdir $DST_DIR"/Pubsub"
protoc -I=$SRC_DIR --go_out=$DST_DIR --go_opt=paths=source_relative --go-grpc_out=$DST_DIR"/Pubsub"  --go-grpc_opt=paths=source_relative protos/Pubsub.proto
mkdir $DST_DIR"/API"
protoc -I=$SRC_DIR --go_out=$DST_DIR --go_opt=paths=source_relative --go-grpc_out=$DST_DIR"/API"  --go-grpc_opt=paths=source_relative protos/API.proto
go mod tidy
go test
statuscode=$?
echo "Exit code for go.mod tidy and test -> "$statuscode
[[ "$statuscode" != "0" ]] && { echo "Some error occured during init script for Go"; echo "Running init for : github.com/pubsubgo"; go mod init github.com/pubsubgo; }
