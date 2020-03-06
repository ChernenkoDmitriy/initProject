// export const CONNECT_WEBSOCKET = 'CONNECT_WEBSOCKET';
// export const WEBSOCKET_DATA = 'WEBSOCKET_DATA';

export const websocketData = (dataFromWS) => {
    return {
        type: 'WEBSOCKET_DATA',
        payload: dataFromWS
    };
};

export const startWebSocket = () => {
    return {
        type: 'CONNECT_WEBSOCKET'
    }
}