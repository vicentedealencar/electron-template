import { ADD_TO_CART, CLOSE_ORDER } from '../constants/ActionTypes';

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
    return state;
  case CLOSE_ORDER:
    state.isClosed = true; //not immutable
    return state;
  default:
    return state;
  }
}
