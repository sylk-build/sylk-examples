// sylk.build Generated Server Code
import { Server, ServerCredentials } from '@grpc/grpc-js';
import { HelloWorldService as HelloWorldServicev1, HelloWorldServiceService as HelloWorldServiceServicev1 } from './services/HelloWorldService/v1/HelloWorldService';

let _PORT:number = 44880;
let _HOST:string = '0.0.0.0';
let _ADDR = `${_HOST}:${_PORT}`

const server = new Server({
	"grpc.max_receive_message_length": -1,
	"grpc.max_send_message_length": -1,
});

async function startServer() {
	const promises: Promise<number>[] = [
	
	];
	const results = await Promise.all(promises);
	console.log(results);

	

	const HelloWorldServicev1Impl = new HelloWorldServicev1()
	server.addService(HelloWorldServiceServicev1, HelloWorldServicev1Impl);

	server.bindAsync(_ADDR, ServerCredentials.createInsecure(), (err: Error | null, bindPort: number) => {
	if (err) {
		throw err;
	}

	console.log(`[sylk.build] Starting gRPC:server:${bindPort}`,`at -> ${new Date().toLocaleString()})`);
	server.start();
	});
}

startServer().then(res => console.log("Service Start Up...")).catch(err => console.log(err));