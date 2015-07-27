import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Connector } from 'react-redux';
import Checkout from '../components/Checkout';
import * as CheckoutActions from '../actions/CheckoutActions';

export default class CheckoutContainer extends Component {
  render() {
    const { products, cart, dispatch } = this.props;

    return (
      <Connector select={state => ({
        products: state.products,
        cart: state.cart
      })}>
        {this.renderChild}
      </Connector>
    );
  }

  renderChild({ products, cart, dispatch }) {
    const actions = bindActionCreators(CheckoutActions, dispatch);

    return <Checkout products={products} cart={cart} actions={actions}/>;
  }

}
