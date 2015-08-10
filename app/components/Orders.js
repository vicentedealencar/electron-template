import React, { PropTypes } from 'react';
import { Card } from 'belle';

export default class Orders {
  static propTypes = {
    orders: PropTypes.array.isRequired
  };

  render() {
    const { orders } = this.props;

    const orderComponents = orders.map((o, i) => <Order key={i} order={o} />);

    return (
      <Card style={{ borderTop: '1px solid #f2f2f2', fontFamily: 'Helvetica' }}>
        <h1>Orders</h1>
        {orderComponents}
      </Card>
    );
  }
}

class Order {
  static propTypes = {
    orders: PropTypes.array.isRequired
  };

  render() {
    const { order } = this.props;

    return (
      <Card style={{ borderTop: '1px solid #f2f2f2', fontFamily: 'Helvetica' }}>
        <h2>Orders</h2>
        {JSON.stringify(order)}
      </Card>
    );
  }
}
