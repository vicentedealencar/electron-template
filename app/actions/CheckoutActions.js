import { ADD_TO_CART, CLOSE_CART, UPDATE_CART_PRODUCT_QUANTITY, SETTLE_CART } from '../constants/ActionTypes';

export function addToCart(product) {
  return {
    type: ADD_TO_CART,
    product
  };
}

export function closeCart(isClosed) {
  return {
    type: CLOSE_CART,
    isClosed
  };
}

export function updateCartProductQuantity(productId, up) {
  return {
    type: UPDATE_CART_PRODUCT_QUANTITY,
    productId,
    up
  };
}

//require redux-thunk middleware
export function settleCart() {
  return (dispatch, getState) => {
    const { cart } = getState();

    dispatch({
      type: SETTLE_CART,
      cart
    });
  };
}
