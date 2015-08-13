// import Router from 'react-router';
// import HashHistory from 'react-router/lib/HashHistory';
// import routes from './routes';
import React, { Component } from 'react';
import CheckoutContainer from './containers/CheckoutContainer';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import * as reducers from './reducers';
import { persistState } from 'redux-pouchdb';

const createStoreWithMiddleware = compose(
  applyMiddleware(thunk),
  persistState(),
  createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

const element = (
  <Provider store={store}>
    {() => <CheckoutContainer />}
  </Provider>);

React.render(element, document.body);

// const history = new HashHistory();
// const element = (
//   <Provider store={store}>
//     {() => <Router history={history} routes={routes} /> }
//   </Provider>
// );
