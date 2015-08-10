import React, { PropTypes } from 'react';
import { Button, Card } from 'belle';

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
      <Card style={{ borderTop: '1px solid #f2f2f2' }}>
        <h2>Cart</h2>
        {cartItens}
        <h3>total {cart.total}</h3>
        <Button onClick={() => closeCart(!cart.isClosed)}>{buttonText}</Button>
      </Card>
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
