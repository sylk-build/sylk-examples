protoc -I=./iot-server/protos $(find ./iot-server/protos/sylklabs -iname "*.proto")  --js_out=import_style=commonjs,binary:./iot-grafana/sylk-iot-datasource/src/api   --grpc-web_out=import_style=typescript,mode=grpcwebtext:./iot-grafana/sylk-iot-datasource/src/api