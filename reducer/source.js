'use strict';

export default function source(state = [], action) {
	switch(action.type) {
		case "RECEIVED_SOURCE_LIST":
			return action.list;
		default :
		  return state;
	}
}