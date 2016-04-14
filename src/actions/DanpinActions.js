'use strict';
import { RECEIVED_BOOK_LIST, RECEIVED_BOOK_TYPE, RECEIVED_SLIDER_LIST } from '../constants/constants';

import BookType from '../models/BookType';
import BookDetail from '../models/BookDetail';

export const fetchBooktype = () => {
  let data = require("../../assets/MockData/danpin/book_type_data.json");
  return dispatch => {
    let bookTypes = data.map((json) => {
      return new BookType(json);
    });
    return dispatch(receivedBooktype(bookTypes));
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
  return dispatch => {
    let dataArray = data[endPoint].map( (json) => {
      return new BookDetail(json);
    });
    return dispatch(receivedBookList(dataArray, endPoint));
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
  let data = require('../../assets/MockData/slide_data.json');
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





