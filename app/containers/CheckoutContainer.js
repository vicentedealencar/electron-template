import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Connector } from 'react-redux';
import Checkout from '../components/Checkout';
import Orders from '../components/Orders';
import * as CheckoutActions from '../actions/CheckoutActions';

export default class CheckoutContainer extends Component {
  render() {
    const { products, cart, dispatch } = this.props;

    // return (
    //   <Connector select={state => ({
    //     orders: state.orders
    //   })}>
    //     {this.renderOrders}
    //   </Connector>
    // );

    return (
      <Connector select={state => ({
        products: state.products,
        cart: state.cart
      })}>
        {this.renderCheckout}
      </Connector>
    );
  }

  renderCheckout({ products, cart, dispatch }) {
    const actions = bindActionCreators(CheckoutActions, dispatch);

    return <Checkout products={products} cart={cart} actions={actions} />;
  }

  renderOrders({ orders }) {
    return <Orders orders={orders} />;
  }

}
