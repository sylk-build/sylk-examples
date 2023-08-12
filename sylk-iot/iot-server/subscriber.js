const stub = require('./clients/typescript');

const iot = new stub.IotServiceV1();

iot.Subscribe({
    name: 'sine'
}).subscribe(evt => {
    console.log('sine',evt)
})

iot.Subscribe({
    name: 'cosine'
}).subscribe(evt => {
    console.log('cosine',evt)
})