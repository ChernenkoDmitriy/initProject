interface InitialState {
    screenAndParams: Object,
}

const initialState = {
    screenAndParams: {},
}

export default function navigationParam(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case 'NAVIGATE':
            return {
                screenAndParams: payload,
            };
        default:
            return state;
    }
}