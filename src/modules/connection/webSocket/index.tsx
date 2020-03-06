
interface ContextWs {
	observers: Array<Object>,
	connection: WebSocket,
}

const context: ContextWs = {
	observers: [],
	connection: null,
}

export const onOpen = () => {
	console.log('onopen websocketOpen evt', context.connection)
	return context.connection;	
}

const websocketClose = () => {
	console.log('onclose websocketClose', context.connection)
	if (context.connection) {
		context.connection.close();
	}
}

export const websocketConnect = (url, type) => {
	console.log('websocketConnect')	
	const socket = new WebSocket(url, type);
	// const socket = new WebSocket('ws://10.1.135.71:6503', 'json');
	socket.onopen = onOpen;	
	// socket.onclose = websocketClose;
	// socket.onmessage = (evt) => websocketMessage(evt, socket)
	context.connection = socket;
}

const websocketMessage = (evt, connection) => {
	// if(connection){
	// 	// connection.onmessage = ;
	// }
	console.log('connection.readyState websocketMessage')
}

export const websocketReconnect = () => {

}

export const websocketAddEventListener = (type: String, callback: Function) => {
	if (context.connection) {
		context.observers.push({ type, callback });
		context.connection.addEventListener(type, callback);
	}
}

export const websocketRemoveEventListener = (type: String, callback: Function) => {
	context.observers.filter(subscriber => subscriber !== callback);
	if (context.connection) {
		context.connection.removeEventListener(type, callback);
	}
}

