import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Checkout from '../components/Checkout';
import * as CheckoutActions from '../actions/CheckoutActions';

@connect(state => ({
  products: state.products,
  cart: state.cart
}))
export default class CheckoutContainer extends Component {
  render() {
    const { products, cart, dispatch } = this.props;
    return (
      <Checkout products={products} cart={cart}
               {...bindActionCreators(CheckoutActions, dispatch)} />
    );
  }
}
