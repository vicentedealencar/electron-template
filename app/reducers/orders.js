import { CONFIRM_PAYMENT } from '../constants/ActionTypes';

export default function orders(orders = [], action) {
  switch (action.type) {
  case CONFIRM_PAYMENT:
    const order = action.cart;
    return [order, ...orders];
  default:
    return orders;
  }
}
