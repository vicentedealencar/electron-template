import { SETTLE_CART } from '../constants/ActionTypes';
import { DB_CHANGES } from '../redux-pouchdb';

export default function orders(state = [], action) {
  switch (action.type) {
  case DB_CHANGES:
    return action.orders;
  case SETTLE_CART:
  	const { cart } = action;
  	console.log('new order', cart);

    return [cart, ...state];
  default:
    return state;
  }
}
