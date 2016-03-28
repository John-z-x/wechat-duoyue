'use strict';
import fetch from 'isomorphic-fetch';

export function LazyLoad(typeIndex, index) {
	return dispatch => {
		return fetch("../MockData/sourcelist_data.js")
      .then(response => response.json())
      .then(json => dispatch(received(json, typeIndex, index)))
	}
}

function received(list, typeIndex, index) {
	return {
		type: "RECEIVED_SOURCE_LIST",
    typeIndex,
    index,
		list
	}
}

export function FilterSourceType(typeIndex) {
  return {
    type: "FILTER_SOURCE_TYPE",
    typeIndex
  }
}