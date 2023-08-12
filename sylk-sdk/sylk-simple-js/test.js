const stub = require('./clients/typescript');

let client = new stub.HelloWorldServiceV1({
    port: 44888
});

client.GetHello({
    text: 'hello world'
}).then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})