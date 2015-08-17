import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Checkout from '../components/Checkout';
import Orders from '../components/Orders';
import * as CheckoutActions from '../actions/CheckoutActions';

export default class CheckoutContainer extends Component {
  render() {
    const { products, cart, dispatch } = this.props;

    const actions = bindActionCreators(CheckoutActions, dispatch);

    return <Checkout products={products} cart={cart} actions={actions} />;
  }

  // renderOrders({ orders }) {
  //   return <Orders orders={orders} />;
  // }
}

export default connect(state => ({
  products: state.products,
  cart: state.cart
}))(CheckoutContainer);
