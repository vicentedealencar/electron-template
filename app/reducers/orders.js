import { SETTLE_CART } from '../constants/ActionTypes';

export default function orders(state = [], action) {
  switch (action.type) {
  case SETTLE_CART:
  	const { order } = action;
  	console.log('new order', order);

    return [order, ...state];
  default:
    return state;
  }
}
