import {
    ServerBuilder,
} from 'sylk-js';

import {
    HelloWorldServiceService,
    Hello
} from './services/protos/sylklabs/hello/world/v1/world';

const server = new ServerBuilder();

server
    .add(HelloWorldServiceService, {
        async getHello(call,context) {
            console.log(JSON.stringify(context.metadata.getAll('sylk-version')))
            return Hello.fromPartial({
                text: call.text
            })
        }
    });

server
    .listen('0.0.0.0:44888')
    .then(res => {
        
        console.log(server.info())
        
    }).catch(err => {
        console.log(err)
    });