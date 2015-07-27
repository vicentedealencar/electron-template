import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';

export default class Cart {
  static propTypes = {
    closeOrder: PropTypes.func.isRequired,
    cart: PropTypes.object.isRequired
  };

  render() {
    const { closeOrder, cart } = this.props;

    const cartItens = cart.itens.map(i => <CartItem item={i} key={i.id}/>);

    return (
      <div>
        <h2>Cart</h2>
        {cartItens}
        {cart.total}
        <Button onClick={() => closeOrder()}>CLOSE</Button>
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
