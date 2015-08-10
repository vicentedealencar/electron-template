import React, { PropTypes } from 'react';
import Catalog from './Catalog';
import Cart from './Cart';
import Payment from './Payment';
import { Card } from 'belle';

export default class Checkout {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    products: PropTypes.array.isRequired,
    cart: PropTypes.object.isRequired
  };

  render() {
    const { actions, products, cart } = this.props;
    const { addToCart, closeCart, settleCart } = actions;

    let catalog, payment;

    if (!cart.isClosed) {
      catalog = <Catalog products={products} addToCart={addToCart} />;
    } else {
      payment = <Payment cart={cart} settleCart={settleCart} />;
    }

    return (
      <Card style={{ borderTop: '1px solid #f2f2f2', fontFamily: 'Helvetica' }}>
        <h1>Checkout</h1>
        {catalog}
        <Cart cart={cart} closeCart={closeCart} />
        {payment}
      </Card>
    );
  }
}
