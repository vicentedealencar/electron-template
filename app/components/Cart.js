import React, { PropTypes } from 'react'
import { Button, Card } from 'belle'

const CartItem = props => {
  const { item, updateCartProductQuantity } = props;

  return (
  <div>
    <a onClick={() => updateCartProductQuantity(item.id, false)} style={ {color: 'blue', cursor: 'pointer'} }> - </a>
    {item.quantity}
    <a onClick={() => updateCartProductQuantity(item.id, true)} style={ {color: 'blue', cursor: 'pointer'} }> + </a>
    {item.name}
    R${item.value.toFixed(2)}
  </div>
  )
}

const Cart = props => {
  const { closeCart, updateCartProductQuantity, cart } = props;

  const cartItens = cart.itens.map(i => <CartItem item={i} key={i.id} updateCartProductQuantity={updateCartProductQuantity} />);

  const buttonText = cart.isClosed ? 'OPEN' : 'CLOSE';

  return (
    <Card style={{ borderTop: '1px solid #f2f2f2' }}>
      <h2>Cart</h2>
      {cartItens}
      <h3>Total: R${cart.total.toFixed(2)}</h3>
      <Button onClick={() => closeCart(!cart.isClosed)}>{buttonText}</Button>
    </Card>
  );
}

export default Cart;
