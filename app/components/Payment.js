import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';

export default class Payment {
  static propTypes = {
    settleCart: PropTypes.func.isRequired,
    cart: PropTypes.object
  };

  render() {
    const { settleCart, cart } = this.props;

    return (
      <div>
        <h2>Payment</h2>
        {cart.total}
        <Button onClick={() => settleCart(cart)} bsStyle="primary">CONFIRM</Button>
      </div>
    );
  }
}
