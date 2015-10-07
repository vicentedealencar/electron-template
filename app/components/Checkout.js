import React, { PropTypes } from 'react'
import Catalog from './Catalog'
import Cart from './Cart'
import Payment from './Payment'
import { Card } from 'belle'

const Checkout = props => {
  const { actions, products, cart } = props
  const { addToCart, closeCart, settleCart, updateCartProductQuantity } = actions

  let catalog, payment
  if (!cart.isClosed) {
    catalog = <Catalog products={products} addToCart={addToCart} />
  } else {
    payment = <Payment cart={cart} settleCart={settleCart} />
  }

  return (
    <Card style={{ borderTop: '1px solid #f2f2f2', fontFamily: 'Helvetica' }}>
      <h1>Checkout</h1>
      {catalog}
      <Cart cart={cart} closeCart={closeCart} updateCartProductQuantity={updateCartProductQuantity} />
      {payment}
    </Card>
  )
}

export default Checkout
