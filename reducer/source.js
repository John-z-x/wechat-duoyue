'use strict';

let sourcestore = [];
export default function source(state = [], action) {
	switch(action.type) {
		case "RECEIVED_SOURCE_LIST":
      sourcestore = sourcestore.concat(action.list);
      //return action.list;
      return sourcestore.filter( (item) => {
        return action.typeIndex == 0 ? true : item.type == action.typeIndex;
      });
    case "FILTER_SOURCE_TYPE":
      return sourcestore.filter( (item) => {
        return action.typeIndex == 0 ? true : item.type == action.typeIndex;
      });
		default :
		  return state;
	}
}