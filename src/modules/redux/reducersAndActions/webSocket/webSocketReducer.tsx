const initialState = {
    data: {}
}

export default function websocketReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case 'WEBSOCKET_DATA':
            return {
                ...state,
                data: payload
            }
        default:
            return state;
    }
}