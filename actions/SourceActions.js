'use strict';
import fetch from 'isomorphic-fetch';

export function LazyLoad(typeIndex) {
	return dispatch => {
		return fetch("/MockData/sourcelist_data.js")
      .then(response => response.json())
      .then(json => dispatch(received(json, typeIndex)))
	}
}

function received(list, typeIndex) {
	return {
		type: "RECEIVED_SOURCE_LIST",
    typeIndex,
		list
	}
}

export function FilterSourceType(typeIndex) {
  return {
    type: "FILTER_SOURCE_TYPE",
    typeIndex
  }
}