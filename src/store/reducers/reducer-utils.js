import { UTILS_ACTIONS } from "../actions-names/utils";

const ReducerUtils = (state = {}, action) => {
    switch (action.type) {
        case UTILS_ACTIONS.UPDATEDATA:
            return {
                ...state,
                ...action.data
            }
        case UTILS_ACTIONS.CLEAR_ALL:
            return {
            }
        default:
            return state;
    }
}

export default ReducerUtils