import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';

export default class Cart {
  static propTypes = {
    closeCart: PropTypes.func.isRequired,
    cart: PropTypes.object.isRequired
  };

  render() {
    const { closeCart, cart } = this.props;

    const cartItens = cart.itens.map(i => <CartItem item={i} key={i.id}/>);

    const buttonText = cart.isClosed ? 'OPEN' : 'CLOSE';
console.log('render cart (only time whyyyy?)', cart);
    return (
      <div>
        <h2>Cart</h2>
        {cartItens}
        {cart.total}
        <Button onClick={() => closeCart(!cart.isClosed)}>{buttonText}</Button>
      </div>
    );
  }
}

class CartItem {
  static propTypes ={
    item: PropTypes.object
  };

  render() {
    const { item } = this.props;

    return (
      <div>
        {item.name}
        {item.quantity}
        {item.value}
      </div>
    );
  }
}
