import { LOADING_ACTIONS } from "../actions-names/loading";
const ReducerLoading = (state = {}, action) => {
    switch (action.type) {
        case LOADING_ACTIONS.LOADING_UPDATE:
            return {
                ...state,
                ...action.data
            };

        default:
            return state
    }
}
export default ReducerLoading