import { ADD_TO_CART, CLOSE_ORDER, CONFIRM_PAYMENT } from '../constants/ActionTypes';

export function addToCart(product) {
  return {
    type: ADD_TO_CART,
    product
  };
}

export function closeOrder() {
  return {
    type: CLOSE_ORDER
  };
}

export function confirmPayment(cart) {
  return {
    type: CONFIRM_PAYMENT,
    cart
  };
}
