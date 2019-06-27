import {ThunkDispatch} from "redux-thunk";
import {counterClear, counterDecrement, counterIncrement, counterSet} from "../actions";

// @ts-ignore
const increment = () => async (dispatch: ThunkDispatch<{}, {}, any>, getState: Function) => {
    dispatch(counterIncrement());
};

// @ts-ignore
const decrement = () => async (dispatch: ThunkDispatch<{}, {}, any>, getState: Function) => {
    dispatch(counterDecrement());
};

// @ts-ignore
const clear = () => async (dispatch: ThunkDispatch<{}, {}, any>, getState: Function) => {
    dispatch(counterClear());
};

// @ts-ignore
const set = (param: string) => async (dispatch: ThunkDispatch<{}, {}, any>, getState: Function) => {
    // if (!param) {
    //     param = "0";
    // }
    // const count = parseInt(param);
    dispatch(counterSet(param));
};

export {increment, decrement, clear, set};