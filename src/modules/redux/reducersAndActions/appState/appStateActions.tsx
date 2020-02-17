// interface SignUp {
//     type: String;
//     data: Boolean;
// }

// interface LoadingSplashView {
//     type: String;
//     data: Boolean;
// }

// export const signUp = (data: Boolean): SignUp => {
export const signUp = (data) => {
    return ({
        type: 'SIGN_UP',
        data,
    });
}

// export const loadingSplashView = (data: Boolean): LoadingSplashView => {
export const loadingSplashView = (data) => {
    return ({
        type: 'IS_LOADING_SPLASH_VIEW',
        data,
    });
}

// export type Action = SignUp | LoadingSplashView;