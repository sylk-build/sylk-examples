import { ServerBuilder } from 'sylk-js';
// import { Hello, HelloWorldServiceClient, HelloWorldServiceServer } from './protos/sylklabs/hello/world/v1/world';
import { HelloWorldService, HelloWorldServiceService } from './services/HelloWorldService/v1/HelloWorldService';

import {from} from 'ix/asynciterable';
import {delay, withAbort} from 'ix/asynciterable/operators';
import { Hello } from './protos/sylklabs/hello/world/v1/world';
import { CallContext } from '../../../../sylk-frameworks/sylk-js/node_modules/sylk-js-core/lib';

const helloWorldImpl = {
  async *streamHello(
    request: Hello,
    context: CallContext,
  ) {

    yield* from([
        Hello.create({
            text: 'hello-1'
        }),
        Hello.create({
            text: 'hello-2'
        }),
        Hello.create({
            text: 'hello-3'
        }),
        Hello.create({
            text: 'hello-4'
        })
    ]).pipe(withAbort(context.signal));
  },
  async *bidiStream(
    request: AsyncIterable<Hello>,
    context: CallContext,
  ) {
    let i = 0;
    for await (const hello of request) {
        // await delay(context.signal, 1000);
        console.log(hello);
        let res = {...hello};
        res.text = 'server stream: '+i
        i++
        yield res;
    }

  }
};

const server = new ServerBuilder({
    appMetadata: {
        name: 'sylk-native-grpc',
        environment: 'dev',
        version: '0.0.1'
    },
    sylkOpts: {
        "sylk.enable_admin_logz": 1,
        "sylk.enable_health_service": 1
    }

});
server.add(HelloWorldServiceService, 
    // <any>helloWorldImpl
    new HelloWorldService()
);

server.listen('0.0.0.0:48880').then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})