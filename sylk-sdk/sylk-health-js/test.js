const sylkJs = require('sylk-js');
const def = require('./lib/services/protos/sylklabs/unstable/v1/unstable').UnstabelServiceService;
const chan = sylkJs.createChannel('0.0.0.0:48889');

const client = sylkJs.createClient(def,chan);

// client.shaky({
//     any_data: 'test data'
// })

client.shaky({
    test: 'test'
}, {
    onHeader: (header) => console.log(header),
    onTrailer: (trailer) => {
        console.log('capacity',trailer.get('x-rate-limit-capacity'))
        console.log('remaining',trailer.get('x-rate-limit-remaining'))
        console.log('reset-time',trailer.get('x-rate-limit-reset-time'))
    },
}).then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
    console.log(err.metadata)
})