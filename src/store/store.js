//  globals window 

import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import { createStateSyncMiddleware, initMessageListener } from 'redux-state-sync';
import storage from 'redux-persist/lib/storage';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { RootReducer } from './reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const syncConfig = {
  blacklist: ['persist/PERSIST'],
  whitelist: [],
};

export const history = createBrowserHistory({
  basename: '',
});

const persistedReducer = persistReducer({
  key: 'store',
  storage,
  whitelist: ['rServerData', 'rSession', 'rUtils'],
}, RootReducer(history));


const middlewares = [
  thunk,
  routerMiddleware(history),
  createStateSyncMiddleware(syncConfig)
];


export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(...middlewares)),
);


export const getHeader = () => {
  const storeData = getState();
  const { rSession } = storeData;
  return {
    // userId: rSession.success == true ? rSession.viewModel[0].user_id : "",
    Authorization: "Bearer " + (rSession.success == true ? rSession.accessToken : ""),
    "Content-Type": "application/json"
  }
}

initMessageListener(store);
export const getState = () => store.getState();
export const persistor = persistStore(store);
