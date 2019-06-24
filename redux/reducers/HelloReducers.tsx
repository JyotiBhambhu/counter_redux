import {ACTION_TYPES} from "../constants/ActionTypes";

const initialState = {
    helloText: "Hello!",
    loading: "true",
    btnPressed: "false",
};

export default (state = initialState, action: any) => {
    switch (action.type) {
        case ACTION_TYPES.HELLO_PRESSED:
            return {
                ...state,
                helloText: "You pressed the button! WoW",
                btnPressed: "true",
            };
        default:
            return state;
    }
}