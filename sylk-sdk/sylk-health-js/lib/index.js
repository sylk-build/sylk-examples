"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sylk_js_1 = require("sylk-js");
const sylk_js_health_1 = require("sylk-js-health");
const unstable_1 = require("./services/protos/sylklabs/unstable/v1/unstable");
const UnstabelService_1 = require("./services/UnstabelService/v1/UnstabelService");
// const def = loadSyncProto('./protos/some/proto/file.proto',{});
// gRPC port
const port = 48889;
// Will be using Health client to check that our health service working well
const chan = (0, sylk_js_1.createChannel)(`0.0.0.0:${port}`);
const healthClient = (0, sylk_js_1.createClient)(sylk_js_health_1.HealthService, chan);
const unstable = (0, sylk_js_1.createClient)(unstable_1.UnstabelServiceService, chan);
const server = new sylk_js_1.ServerBuilder({
    // Simple metadata
    appMetadata: {
        name: 'sylk-health-js',
        environment: 'dev',
        version: '0.0.1'
    },
    grpcOpts: {
        "grpc.enable_channelz": 1
    },
    sylkOpts: {
        "sylk.enable_admin_logz": 1,
        "sylk.enable_webhooks_server": 1,
        // Pass the flag for auto attachment of sylk-js-health service
        "sylk.enable_health_service": 1
    }
});
server.use((0, sylk_js_1.createServerLogging)({
    allowPayloadLog: true,
    allowTracing: true,
    logPrefix: 'sylk-health-js',
    // logger: state,
}));
server.use((0, sylk_js_1.createRateLimiting)({
    capacity: 10,
    refillRate: 10,
    refillTime: 6000,
    type: 'ip'
}));
// Add you custom services
server.add(unstable_1.UnstabelServiceService, new UnstabelService_1.UnstabelService());
// simple health check
const healthCheck = () => {
    // Need an auth token to call admin services as they are attached with auth middleware by default.
    // Can change the admin token by setting the Env variable: ADMINZ_AUTH_TOKEN
    const md = new sylk_js_1.Metadata({ "x-adminz-auth-token": "sEcer3tT0k3n" });
    healthClient.check(sylk_js_health_1.HealthCheckRequest.fromPartial({}), {
        onTrailer: (trailer) => console.log(trailer.get('x-rate-limit-capacity')),
        metadata: md,
    }).then(res => {
        console.log('health check:', res);
    }).catch(err => {
        console.log('health check:', err);
    });
};
server.listen(`0.0.0.0:${port}`)
    .then(res => {
    // HealthCheck after server spins up
    healthCheck();
    console.log(server.info());
    console.log(server.context.health.getStatus('sylklabs.unstable.v1.UnstabelService'));
    setTimeout(() => {
        // Changing the health state internally
        // Can also handle the health state within the `context.app.health.setStatus()`
        // within the RPC's
        server.context.health.setStatus('unhealthy');
        server.context.logz.info('hello world');
        // Should set to status: 2 (NOT_SERVING)
        healthCheck();
    }, 10000);
}).catch(err => {
    console.log(err);
});
//# sourceMappingURL=index.js.map