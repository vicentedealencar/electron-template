import React, { Component } from 'react';
import CheckoutContainer from './containers/CheckoutContainer';
import { Provider } from 'react-redux';
import initializeCheckout from './stores/initializeCheckout';

const store = initializeCheckout();

const element = (
  <Provider store={store}>
    {() => <CheckoutContainer />}
  </Provider>);

React.render(element, document.body);
