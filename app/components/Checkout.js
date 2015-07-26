import React, { PropTypes } from 'react';
import Catalog from './Catalog';
import Cart from './Cart';
import Payment from './Payment';

export default class CheckoutApp {
  static propTypes = {
    addToCart: PropTypes.func.isRequired,
    closeOrder: PropTypes.func.isRequired,
    confirmPayment: PropTypes.func.isRequired,
    products: PropTypes.array,
    cart: PropTypes.object
  };

  render() {
    const { addToCart, closeOrder, confirmPayment, products, cart } = this.props;

    let catalog, payment;

    console.log('render');

    if (!cart.isClosed) {
      catalog = <Catalog products={products} addToCart={addToCart} />;
    } else {
      payment = <Payment cart={cart} confirmPayment={confirmPayment} />;
    }

    return (
      <div>
        <h1>Checkout</h1>
        {catalog}
        <Cart cart={cart} closeOrder={closeOrder} />
        {payment}
      </div>
    );
  }
}
