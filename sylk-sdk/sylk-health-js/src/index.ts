import { ServerBuilder, createChannel, createClient, Metadata, createServerLogging, WebhookHandler, loadSyncProto, createRateLimiting } from 'sylk-js';
import { HealthService, HealthCheckRequest } from 'sylk-js-health';
import { Empty } from './services/protos/google/protobuf/empty';
import { UnstabelServiceService } from './services/protos/sylklabs/unstable/v1/unstable';
import { LogzState } from 'sylk-js-logz';
import { UnstabelService } from './services/UnstabelService/v1/UnstabelService';
import { ServiceImplementation } from '../../../../sylk-frameworks/sylk-js/node_modules/sylk-js-core/lib';
import { CallContext } from '../../../../sylk-frameworks/sylk-js/node_modules/sylk-js-core/lib';

// const def = loadSyncProto('./protos/some/proto/file.proto',{});

// gRPC port
const port = 48889;

// Will be using Health client to check that our health service working well
const chan = createChannel(`0.0.0.0:${port}`);
const healthClient = createClient(HealthService,chan);

const unstable = createClient(UnstabelServiceService,chan);

const server = new ServerBuilder({
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

server.use(createServerLogging({
    allowPayloadLog: true,
    allowTracing: true,
    logPrefix: 'sylk-health-js',
    // logger: state,
}))

server.use(createRateLimiting({
    capacity:10,
    refillRate: 10,
    refillTime: 6000,
    type: 'ip'
}))

// Add you custom services
server.add(UnstabelServiceService, 

    new UnstabelService(),
    
    // <ServiceImplementation<UnstabelServiceService, CallContext>>{
    //     async shaky(call, ctx) {
    //         console.log(ctx)
    //         console.log('recieved call');
    //         ctx.app.health.setStatus('healthy')
    
    //         return Empty.create()
    //     } 
    // }

)

// simple health check
const healthCheck = () => {
    // Need an auth token to call admin services as they are attached with auth middleware by default.
    // Can change the admin token by setting the Env variable: ADMINZ_AUTH_TOKEN
    const md = new Metadata({"x-adminz-auth-token":"sEcer3tT0k3n"})
    healthClient.check(
        HealthCheckRequest.fromPartial({}
    ),{
        onTrailer: (trailer) => console.log(trailer.get('x-rate-limit-capacity')),
        metadata: md,
    }).then(res => {
        console.log('health check:',res)
    }).catch(err => {
        console.log('health check:',err)
    })
}

server.listen(`0.0.0.0:${port}`)
    .then(res => {
        
        // HealthCheck after server spins up
        healthCheck()
        
        console.log(server.info())
        console.log(server.context.health.getStatus('sylklabs.unstable.v1.UnstabelService'))
        
        setTimeout(() => {
            // Changing the health state internally
            // Can also handle the health state within the `context.app.health.setStatus()`
            // within the RPC's
            server.context.health.setStatus('unhealthy')
            server.context.logz.info('hello world')
            // Should set to status: 2 (NOT_SERVING)
            healthCheck()
        }, 10_000);

    }).catch(err => {
        console.log(err)
    })

