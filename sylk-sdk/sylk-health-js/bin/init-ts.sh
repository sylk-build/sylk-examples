#!/bin/bash

echo "[sylk.build] init.sh starting protoc compiler"
npm i
node ./bin/proto.js
npm run build
statuscode=$?
echo "Exit code for protoc -> "$statuscode
[[ "$statuscode" != "0" ]] && { echo "Some error occured during init script"; exit 1; }
exit 0