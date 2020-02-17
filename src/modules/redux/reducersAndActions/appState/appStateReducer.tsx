// import { Action } from "./appStateActions";

// interface InitialState {
//     isSignUp: Boolean;
//     userToken: String;
//     isLoadingSplashView: Boolean;
// }

const initialState = {
    isSignUp: false,
    userToken: '',
    isLoadingSplashView: true,
};

// export default function appState(state: InitialState = initialState, action: Action) {
export default function appState(state = initialState, action) {
    const { type, data } = action;
    switch (type) {
        case 'SIGN_UP':
            return {
                ...state,
                isSignUp: data,
            };
        case 'AUTHENTICATION':
            return {
                ...state,
                userToken: data,
            };
        case 'IS_LOADING_SPLASH_VIEW':
            return {
                ...state,
                isLoadingSplashView: data,
            };
        default:
            return state;
    }
}