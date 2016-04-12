'use strict';
import fetch from 'isomorphic-fetch';
import { RECEIVED_SLIDE_DATA } from '../constants/constants';

export function slideDataLoad(typeIndex) {
  return dispatch => {
    var json = require('../../assets/MockData/slide_data.json');
    return dispatch(receiveSlideData(json,typeIndex));
  }
}

function receiveSlideData(data,typeIndex) {
  return {
    type: RECEIVED_SLIDE_DATA,
    typeIndex,
    data
  }
}