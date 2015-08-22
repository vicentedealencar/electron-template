import React, { PropTypes } from 'react';
import { Button, Card } from 'belle';

export default class Payment {
  static propTypes = {
    settleCart: PropTypes.func.isRequired,
    cart: PropTypes.object
  };

  render() {
    const { settleCart, cart } = this.props;

    return (
      <Card style={{ borderTop: '1px solid #f2f2f2' }}>
        <h2>Payment</h2>
        <h3>Total: R${cart.total.toFixed(2)}</h3>
        <Button onClick={() => settleCart(cart)} bsStyle="primary">CONFIRM</Button>
      </Card>
    );
  }
}
