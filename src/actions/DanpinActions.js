'use strict';
import {
    RECEIVED_BOOK_LIST,
    RECEIVED_BOOK_TYPE,
    RECEIVED_SLIDER_LIST,
    RECEIVED_BOOK_DETAIL,
    RECEIVED_BOOK_RELATED_LIST
} from '../constants/constants';

import BookType from '../models/BookType';
import BookDetail from '../models/BookDetail';

//取出书籍分类数据
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

//取出热门和最新的数据
export const fetchBookListData = (endPoint) => {
  let data = require('../../assets/MockData/danpin/book_list_data.json');
  return dispatch => {
    let dataArray = data[endPoint].map((json) => {
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

//取出banner数据
export const fetchSliderList = () => {
  let data = require('../../assets/MockData/slide_data.json');
  return dispatch => {
    return dispatch(receivedSliderList(new BookDetail(data)));
  }
};

const receivedSliderList = (data) => {
  return {
    type: RECEIVED_SLIDER_LIST,
    data
  }
};

//取出书籍详细信息数据
export const fetchBookDetail = ( id ) => {
  let data = require('../../assets/MockData/danpin/bookdetail.json');
  let detail = new BookDetail(data);
  return dispatch => {
    return dispatch(receivedBookDetail(detail));
  }
}

const receivedBookDetail = (data) => {
  return {
    type: RECEIVED_BOOK_DETAIL,
    data
  }
};

//取出相关书籍信息
export const fetchBookRelatedList = (id) => {
  let data = require('../../assets/MockData/danpin/book_list_data.json');
  let dataArray = data.new.map((json) => {
    return new BookDetail(json);
  });
  return dispatch => {
    return dispatch(receivedBookRelatedList(dataArray));
  }
};

const receivedBookRelatedList = (data) => {
  return {
    type: RECEIVED_BOOK_RELATED_LIST,
    data
  }
};




