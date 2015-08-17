import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import { persistState } from 'redux-pouchdb';
import * as reducers from '../reducers';

const reducer = combineReducers(reducers);

const applyMiddlewares = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
);

const createStoreWithMiddleware = compose(
  applyMiddlewares,
  persistState(),
  createStore);

export default function initializeCheckout(initialState) {
  return createStoreWithMiddleware(reducer, initialState);
}
