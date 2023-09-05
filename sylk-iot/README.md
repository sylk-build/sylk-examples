# Grafana-gRPC IoT Integration

## Overview

This repository contains all you need to integrate real-time streaming data from gRPC services into Grafana. Designed especially for IoT applications, this Grafana plugin fills the existing gap in native support for gRPC within Grafana.

### Features

- Real-time visualization of gRPC streams.
- Enhanced system observability for expansive IoT networks.
- High performance through the usage of Protocol Buffers.
- Language agnostic architecture for seamless integration across platforms.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Crafting the gRPC IoT Service](#crafting-the-grpc-iot-service)
4. [Plugin Architecture](#plugin-architecture)
5. [Assessment and Future Works](#assessment-and-future-works)
6. [Resources](#resources)
7. [Contributing](#contributing)
8. [License](#license)

## Installation

1. **Clone the Repository**

    ```bash
    git clone https://github.com/sylk-build/sylk-examples/sylk-iot.git
    ```

2. **Navigate to the Project Directory**

    ```bash
    cd sylk-iot
    ```

## Usage

Run the docker setup.
```bash
docker compose up --build -d
```

## Crafting the gRPC IoT Service

Detailed steps and explanations regarding the setup of your gRPC service can be found [here](./docs/grpc-setup.md).

## Plugin Architecture

Information on the plugin architecture and how it acts as a bridge between Grafana and gRPC can be found [here](./docs/plugin-architecture.md).

## Assessment and Future Works

The integration successfully visualizes real-time IoT data and can be further refined for broader use cases like Time-Range Analytics, Network Resilience, and Query Customization.

## Resources

- [Grafana Plugin Guide](https://grafana.com/docs/grafana/latest/developers/plugins/create-a-grafana-plugin/develop-a-plugin/build-a-data-source-plugin/)
- [Ghz - gRPC load test tool](https://ghz.sh/)
- [Sylk CLI](https://docs.sylk.build/cli/commands)
- [Go concurrency - explained by Rob Pike](https://www.youtube.com/watch?v=oV9rvDllKEg)

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.