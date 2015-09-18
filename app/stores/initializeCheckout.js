import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import { persistentStore } from 'redux-pouchdb';
import * as reducers from '../reducers';

const reducer = combineReducers(reducers);

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
// 	  persistentStore)
// 	  (createStore);
// } else {
	finalCreateStore = compose(
	  applyMiddlewares,
	  persistentStore)
	  (createStore);
// }

export default function initializeCheckout(initialState) {
  return finalCreateStore(reducer, initialState);
}
