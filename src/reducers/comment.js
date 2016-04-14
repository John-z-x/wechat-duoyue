'use strict';
import { RECEIVED_COMMENT, ADD_COMMENT, TOGGLE_PRAISE } from '../constants/constants';


const toComment = (state, action) => {
	switch(action.type) {
    case ADD_COMMENT:
      return {
      	text: action.text,
      	praise: false,
      };
    case TOGGLE_PRAISE:
    	if (state.id !== action.id) {
    		return state;
    	}
    	return Object.assign({}, state, {
    		praise: !state.praise,
    		praiseNum: state.praise ? state.praiseNum - 1 : state.praiseNum + 1
    	});
		default:
		  return state;
	}
};

const comment = (state = [], action) => {
	switch(action.type) {
		case RECEIVED_COMMENT:
			if (state.length > 0 && action.data.length == 1) {
        return action.data.concat(state.filter((item) => {
            if (item.id !== action.data.id) {
              return true;
            }
          }
        ))
      } else {
        return action.data;
      }
    case ADD_COMMENT:
      return [action.json].concat(state);
    case TOGGLE_PRAISE:
    	return state.map(t =>
    		toComment(t, action)
    	);
		default:
		  return state;
	}
};

export default comment;