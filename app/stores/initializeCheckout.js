import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import persistState, { mergePersistedState  } from 'redux-localstorage';
import adapter from 'redux-localstorage-pouchdb';
import * as reducers from '../reducers';
import PouchDB from 'pouchdb';

const rootReducer = combineReducers(reducers);

const reducer = compose(mergePersistedState())(rootReducer);

const db = new PouchDB('checkout-db');

const storage = adapter();

const applyMiddlewares = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
);

let finalCreateStore;
// if (__DEV__) {
// 	const { devTools } = require('redux-devtools');

// 	finalCreateStore = compose(
// 	  applyMiddlewares,
// 	  devTools(),
// 	  persistState(storage))
// 	  (createStore);
// } else {
	finalCreateStore = compose(
	  applyMiddlewares,
	  persistState(storage))
	  (createStore);
// }

export default function initializeCheckout(initialState) {
  return finalCreateStore(reducer, initialState);
}
