'use strict';
import fetch from 'isomorphic-fetch';
import { RECEIVED_SOURCE_LIST, FILTER_SOURCE_TYPE } from '../constants/constants';

export function sourceLazyLoad(typeIndex, index) {
	return dispatch => {
    var json = require('../../assets/MockData/sourcelist_data.json');
    return dispatch(receivedSourceList(json, typeIndex, index));
		//return fetch("../../../assets/MockData/sourcelist_data.js")
     // .then(response => response.json())
     // .then(json => dispatch(received(json, typeIndex, index)))
	}
}

function receivedSourceList(list, typeIndex, index) {
	return {
		type: RECEIVED_SOURCE_LIST,
    typeIndex,
    index,
		list
	}
}

export function filterSourceType(typeIndex) {
  return {
    type: FILTER_SOURCE_TYPE,
    typeIndex
  }
}