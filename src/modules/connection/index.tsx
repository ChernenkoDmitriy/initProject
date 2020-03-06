import { websocketConnect, onOpen } from "./webSocket";

// import IWebsocket, { connection } from "./webSocket";
// import { websocketConnect } from "./webSocket/services";

const IWebsocketConnect = (url: String, type?: String) => {
	const result = websocketConnect(url, type);
	return result;
};

const IWebsocketOpen = () => {
    // const result = websocketOpen();
    const result = onOpen();
	return result;
};

// const IWebsocketClose = () => {
// 	connection.close();
// };

// const IWebsocketMessage = (evt, connection) => {
// 	const result = websocketMessage(evt, connection);
// 	return result;
// };

// const IWebsocketReconnect = () => {
// 	const result = websocketReconnect();
// 	return result;
// };

// const IWebsocketAddEventListener = () => {
// 	const result = websocketAddEventListener();
// 	return result;
// };

// const IWebsocketRemoveEventListener = () => {
// 	const result = websocketRemoveEventListener();
// 	return result;
// };

const IConnection = {
    Open: IWebsocketOpen,
    // Close: IWebsocketClose,
    connect: IWebsocketConnect,
    // Message: IWebsocketMessage,
    // Reconnect: IWebsocketReconnect,
    // AddEventListener: IWebsocketAddEventListener,
    // RemoveEventListener: IWebsocketRemoveEventListener,
};

export default IConnection;