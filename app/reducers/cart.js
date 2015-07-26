import { ADD_TO_CART } from '../constants/ActionTypes';

const initialState = {
  itens: [],
  total: 0
};

export default function cart(cart = initialState, action) {
  switch (action.type) {
  case ADD_TO_CART:
    const product = action.product;
    const found = cart.itens.filter(i => i.id === product.id);

    if (found && found[0]) {
      found[0].quantity++;
      found[0].value += product.price;
    } else {

      cart.itens = [{
        id: product.id,
        name: product.name,
        quantity: 1,
        value: product.price
      }, ...cart.itens];
    }

    cart.total += product.price;
    return cart;
  default:
    return cart;
  }
}
