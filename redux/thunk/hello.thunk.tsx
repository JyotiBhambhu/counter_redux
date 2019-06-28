import {ThunkDispatch} from "redux-thunk";
import {helloBtnPressed} from "../actions";


// @ts-ignore
const hello = () => async (dispatch: ThunkDispatch<{}, {}, any>, getState: Function) => {
    dispatch(helloBtnPressed());
};

export {hello};