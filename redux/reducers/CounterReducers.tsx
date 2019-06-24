import {ACTION_TYPES} from "../constants/ActionTypes";

const initialState = {
    count: 0,
};

/**
 * Anonymous function
 *
 * @param state default value is assigned
 * @param action
 */
export default (state = initialState, action: any) => {
    switch (action.type) {
        case ACTION_TYPES.INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            };

        case ACTION_TYPES.DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            };
        case ACTION_TYPES.CLEAR:
            return {
                ...state,
                count: 0,
            };
        case ACTION_TYPES.SET_NUMBERS:
            return {
                ...state,
                count: action.payload,
            };

        default:
            return state;
    }
}