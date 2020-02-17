import { config } from "../../../../config";
// import { Action } from "./themeAction";

const initialState = {
    ...config.theme.light
};

// export default function theme(state = initialState, action: Action) {
export default function theme(state = initialState, action) {
    const { type } = action;
    switch (type) {
        case 'CHANGE_THEME':
            return state.dark ? { ...config.theme.light } : { ...config.theme.dark };
        default:
            return state;
    }
}