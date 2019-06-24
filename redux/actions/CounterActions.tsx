import {ACTION_TYPES} from "../constants/ActionTypes";

export const counterIncrement = () => {
    return {
        type: ACTION_TYPES.INCREMENT
    };
};

export const counterDecrement = () => {
    return {
        type: ACTION_TYPES.DECREMENT
    };
};

export const counterClear = () => {
    return {
        type: ACTION_TYPES.CLEAR
    };
};

export const counterSet = (receivedNumbers) => {
    return {
        type: ACTION_TYPES.SET_NUMBERS,
        payload: receivedNumbers,
    };
};