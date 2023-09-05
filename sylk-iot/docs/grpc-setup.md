
# Crafting the gRPC IoT Service

## Overview

This document provides detailed instructions on setting up the gRPC server that is an integral part of our Grafana-gRPC IoT integration suite. This gRPC service handles real-time data streams, making them available for visualization in Grafana.

## Table of Contents

1. [Requirements](#requirements)
2. [Installation](#installation)
3. [Protocol Buffers Schema](#protocol-buffers-schema)
4. [Server Implementation](#server-implementation)
5. [Testing](#testing)
6. [Next Steps](#next-steps)

## Requirements

- Go (latest version)
- Protocol Buffers Compiler (protoc)
- gRPC Go package

## Installation

### Go

Install Go by following the instructions [here](https://golang.org/doc/install).

### Protocol Buffers Compiler (protoc)

Follow the installation instructions on the [Protocol Buffers GitHub repository](https://github.com/protocolbuffers/protobuf).

### gRPC Go Package

Install the gRPC Go package:

```bash
go get -u google.golang.org/grpc
```

## Protocol Buffers Schema

We use [`Sylk Build CLI`](https://sylk.build/) to manage our protobuf schema, you can install the sylk build CLI:

```bash
pip install sylk
```

Then to build and compile the protobuf schema you can run the following command:
```bash
sylk build
```

You can enrich and modify the schema by interacting with [`sylk generate`](https://docs.sylk.build/cli/commands#generateg) or with manual code changes and update the diff [`sylk weave`](https://docs.sylk.build/cli/commands#weave) commands see more details and: [Sylk Docs](https://docs.sylk.build/)

## Next Steps

After successfully crafting your gRPC server, the next step is to integrate it with the Grafana-gRPC plugin. Please refer to our [Plugin Architecture document](./plugin-architecture.md) for more details.

## Additional Resources

- [gRPC documentation](https://grpc.io/docs/)
- [Protocol Buffers documentation](https://developers.google.com/protocol-buffers)