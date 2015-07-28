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
    
    return (
      <div>
        <h2>Cart</h2>
        {cartItens}
        <h3>total {cart.total}</h3>
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
        {item.quantity}x {item.name} {item.value}
      </div>
    );
  }
}
