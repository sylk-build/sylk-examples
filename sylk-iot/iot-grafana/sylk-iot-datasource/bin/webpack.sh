#!/bin/bash
declare -a services=("protos")
for SERVICE in "${services[@]}"; do
    echo $SERVICE
    cd $SERVICE
    for FILE in *; do
        filename=$FILE
        search="protos\/"
        replace=""
        sed -i'.bak' -e "1,8 s/$search/$replace/gi" $filename
        rm -f *.bak
        echo "[sylk-iot-script] Compiling -> "$filename
        sudo protoc -I=../protos $filename  --js_out=import_style=commonjs,binary:../src/api   --grpc-web_out=import_style=typescript,mode=grpcwebtext:../src/api
    done
done