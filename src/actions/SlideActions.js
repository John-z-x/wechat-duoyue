'use strict';
import Banner from '../models/Banner';
import { RECEIVED_SLIDE_DATA } from '../constants/constants';

export const slideDataLoad = (typeIndex) => {
  return dispatch => {
    let json = require('../../assets/MockData/slide_data.json');
    let dataArray = json[typeIndex].map( (json) => {
      return new Banner(json);
    });
    return dispatch(receiveSlideData(dataArray, typeIndex));
  }
};

const receiveSlideData = (data, typeIndex) => {
  return {
    type: RECEIVED_SLIDE_DATA,
    typeIndex,
    data
  }
};