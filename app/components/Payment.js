import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';

export default class Payment {
  static propTypes = {
    confirmPayment: PropTypes.func.isRequired,
    cart: PropTypes.object
  };

  render() {
    const { confirmPayment, cart } = this.props;

    return (
      <div>
        <h2>Payment</h2>
        {cart.total}
        <Button onClick={() => confirmPayment(cart)} bsStyle="primary">CONFIRM</Button>
      </div>
    );
  }
}
