import { SETTLE_CART } from '../constants/ActionTypes';
import { persist } from 'redux-pouchdb';

function orders(state = [], action) {
  switch (action.type) {
  case SETTLE_CART:
  	const { cart } = action;
  	console.log('new order', cart);

    return [cart, ...state];
  default:
    return state;
  }
}

export default persist(orders);
