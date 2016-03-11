'use strict';
import fetch from 'isomorphic-fetch';

export function LazyLoad() {
	return dispatch => {
		return fetch("/MockData/sourcelist_data.js")
      .then(response => response.json())
      .then(json => dispatch(received(json)))
	}
}

function received(list) {
	return {
		type: "RECEIVED_SOURCE_LIST",
		list
	}
}