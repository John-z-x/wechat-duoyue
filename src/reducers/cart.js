'use strict';
import { MODIFY_GOODS_NUM, DELETE_GOODS_ITEM, ADD_GOODS_TO_CART, RECEIVED_CART } from '../constants/constants';

export default function data(state = [] , action) {
	switch(action.type) {
		case MODIFY_GOODS_NUM:
		  return state.map(item =>
				item.id === action.id ? Object.assign({}, item, { num: action.num}) : item
		 	);
		
		case DELETE_GOODS_ITEM:
		  return state.filter(item =>
				item.id !== action.id
		  );

    case ADD_GOODS_TO_CART:
      action.json.num = action.num;
      return [action.json].concat(state);

		case RECEIVED_CART:
		  return action.data;

		default:
		  return state;
	}
}