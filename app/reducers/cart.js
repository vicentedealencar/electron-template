import { ADD_TO_CART, CLOSE_CART, UPDATE_CART_PRODUCT_QUANTITY, SETTLE_CART } from '../constants/ActionTypes';
import invariant from 'invariant';

const initialState = {
  itens: [],
  total: 0,
  isClosed: false
};

export default function cart(state = initialState, action) {
  switch (action.type) {
  case ADD_TO_CART:
    const product = action.product;
    const found = state.itens.filter(i => i.id === product.id);
    if (found && found[0]) {
      found[0].quantity++;
      found[0].value += product.price;
    } else {

      state.itens = [{
        id: product.id,
        name: product.name,
        quantity: 1,
        value: product.price
      }, ...state.itens];
    }

    state.total += product.price;
console.log('action', action);
console.log('state', state);
    return state;
  case CLOSE_CART:
    state.isClosed = action.isClosed;
    return state;
  case UPDATE_CART_PRODUCT_QUANTITY:
    const { productId, up } = state;
    const found2 = state.itens.filter(i => i.id === productId);

    invariant(found2 && found2[0], 'productId not found2');

    up ? found2[0].quantity++ : found2[0].quantity--;

    return state;
  case SETTLE_CART:
    return initialState;
  default:
    return state;
  }
}
