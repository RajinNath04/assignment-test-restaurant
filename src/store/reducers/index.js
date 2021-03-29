import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';



import rLoading from './reducer-loading';
import rUtils from "./reducer-utils";

export const RootReducer = history => (
  combineReducers({
    router: connectRouter(history),
    rLoading,
    rUtils,
  })
);
