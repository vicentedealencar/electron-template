import { ADD_TO_CART, CLOSE_CART, UPDATE_CART_PRODUCT_QUANTITY, SETTLE_CART } from '../constants/ActionTypes';
import { persist } from '../redux-pouchdb';
import invariant from 'invariant';

const initialState = {
  itens: [],
  itensById: {},
  total: 0,
  isClosed: false
};

function cart(state = initialState, action) {
  let found, total, itensById, itens;
  switch (action.type) {
  case ADD_TO_CART:
    const product = action.product;
    found = state.itensById[product.id];
    total = state.total + product.price;

    const updated = found ? {
      ...found,
      quantity: found.quantity + 1,
      value: found.value + found.price
    } : {
      ...product,
      quantity: 1,
      value: product.price
    };

    itensById = {
      ...state.itensById,
      [updated.id]: updated
    };

    itens = Object.keys(itensById).map(key => itensById[key]);

    return {
      ...state,
      total,
      itens,
      itensById,
    };
  case CLOSE_CART:
    return {
      ...state,
      isClosed: action.isClosed
    };
  case UPDATE_CART_PRODUCT_QUANTITY:
    const { productId, up } = state;

    found = state.itensById[productId];

    invariant(!!found, 'product not found');

    const quantityDiff = up ? 1 : -1;

    const priceDiff = found.price * quantityDiff;

    total = state.total + priceDiff

    itensById = {
      ...state.itensById,
      [found.id]: {
        ...found,
        quantity: found.quantity + quantityDiff,
        value: found.value + priceDiff
      }
    };

    itens = Object.keys(itensById).map(key => itensById[key]);

    return {
      ...state,
      total,
      itens,
      itensById,
    };
  case SETTLE_CART:
    return initialState;
  default:
    return state;
  }
}

export default persist(cart);
