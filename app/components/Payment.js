import React, { PropTypes } from 'react'
import { Button, Card } from 'belle'

const Payment = props => {
  const { settleCart, cart } = props

  return (
    <Card style={{ borderTop: '1px solid #f2f2f2' }}>
      <h2>Payment</h2>
      <h3>Total: R${cart.total.toFixed(2)}</h3>
      <Button onClick={() => settleCart(cart)} bsStyle="primary">CONFIRM</Button>
    </Card>
  )
}

export default Payment
