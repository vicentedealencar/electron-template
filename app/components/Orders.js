import React, { PropTypes } from 'react'
import { Card } from 'belle'

const Order = props => {
  const { order } = props

  return (
    <Card style={{ borderTop: '1px solid #f2f2f2', fontFamily: 'Helvetica' }}>
      <h2>Orders</h2>
      {JSON.stringify(order)}
    </Card>
  )
}

const Orders = props => {
  const { orders } = props

  const orderComponents = orders.map((o, i) => <Order key={i} order={o} />)

  return (
    <Card style={{ borderTop: '1px solid #f2f2f2', fontFamily: 'Helvetica' }}>
      <h1>Orders</h1>
      {orderComponents}
    </Card>
  )
}

export default Orders
