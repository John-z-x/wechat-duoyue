'use strict';
import { RECEIVED_BOOK_LIST, RECEIVED_BOOK_TYPE, RECEIVED_SLIDER_LIST } from '../constants/constants';

export const fetchBooktype = () => {
  let data = require("../../assets/MockData/danpin/book_type_data.json");
  return dispatch => {

    return dispatch(receivedBooktype(data));
  };
};

const receivedBooktype = (data) => {
  return {
    type: RECEIVED_BOOK_TYPE,
    data
  }
};

export const fetchBookListData = (endPoint) => {
  let data = require('../../assets/MockData/danpin/book_list_data.json');
  console.log(data[endPoint]);
  return dispatch => {
    return dispatch(receivedBookList(data[endPoint], endPoint));
  }
};

const receivedBookList = (data, endPoint) => {
  return {
    type: RECEIVED_BOOK_LIST,
    data,
    endPoint: endPoint
  }
};

export const fetchSliderList = () => {
  let data = require('../../assets/MockData/danpin/slider_data.json');
  return dispatch => {
    return dispatch(receivedSliderList(data));
  }
};

const receivedSliderList = (data) => {
  return {
    type: RECEIVED_SLIDER_LIST,
    data
  }
};





