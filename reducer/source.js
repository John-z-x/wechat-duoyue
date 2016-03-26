'use strict';

let sourcestore = [];
export default function source(state = [], action) {
  let NUMBER_OF_ONCE = 4, index = action.index;
  let start = parseInt(NUMBER_OF_ONCE*index ,10) + 0, end = parseInt(NUMBER_OF_ONCE*(index), 10)+4;
	switch(action.type) {
		case "RECEIVED_SOURCE_LIST":
      sourcestore = sourcestore.concat(action.list);
      return sourcestore.filter( (item) => {
        return action.typeIndex == 0 ? true : item.type == action.typeIndex;
      }).slice(start || 0, end || 3);
    case "FILTER_SOURCE_TYPE":
      return sourcestore.filter( (item) => {
        return action.typeIndex == 0 ? true : item.type == action.typeIndex;
      }).slice(parseInt(start, 10), parseInt(end, 10));
		default :
		  return state;
	}
}