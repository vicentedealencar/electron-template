import React, { PropTypes } from 'react';
import Catalog from './Catalog';
import Cart from './Cart';
import Payment from './Payment';

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
      <div>
        <h1>Checkout</h1>
        {catalog}
        <Cart cart={cart} closeCart={closeCart} />
        {payment}
      </div>
    );
  }
}
