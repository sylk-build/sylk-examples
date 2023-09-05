const sylkJs = require('sylk-js');
const helloWorld = require('../lib/protos/sylklabs/hello/world/v1/world');

const chan = sylkJs.createChannel('0.0.0.0:48880');

const client = sylkJs.createClient(helloWorld.HelloWorldServiceService, chan);
const md = sylkJs.Metadata();
md.set('client-side-md','text')

// const stream = client.streamHello({text:'test-stream'},{
//     metadata: md,
//     onTrailer: (md) => console.log(md.get('test-key')),
//     onHeader: (md) => console.log(md.get('test-key')) 
// });

// async function serverStream() {
//     for await (const hello of stream) {
//         console.log(hello)
//     }
// }

// serverStream().then(res => {
// })



// const response = client.clientStream(iterator());
// response.then(res => {
//     console.log(res)
// }).catch(err => {
//     console.log(err)
// })


async function bidiStream() {
    async function* iterator() {
        for (let i = 0; i < 10; i++) {
            yield {text: 'client stream: '+i};
        }
    }
    
    const serverStream = client.bidiStream(iterator());
    for await (const stream of serverStream) {
        console.log(stream);
    }
}

bidiStream().then(res => {
})