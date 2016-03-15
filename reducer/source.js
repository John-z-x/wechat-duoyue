'use strict';

let sourcestore = [];
export default function source(state = [], action) {
	switch(action.type) {
		case "RECEIVED_SOURCE_LIST":
      sourcestore = sourcestore.concat(action.list);
			return action.list;
    case "FILTER_SOURCE_TYPE":
      return sourcestore.filter( (item) => {
        console.log(item.type == action.typeIndex);
        item.type == action.typeIndex
      });
		default :
		  return state;
	}
}