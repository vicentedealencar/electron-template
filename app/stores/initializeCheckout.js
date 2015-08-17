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

const createStoreWithMiddleware = compose(
  applyMiddlewares,
  persistentStore,
  createStore);

export default function initializeCheckout(initialState) {
  return createStoreWithMiddleware(reducer, initialState);
}
