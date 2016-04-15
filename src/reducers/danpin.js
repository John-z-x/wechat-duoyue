/*
 * Created on 2016-04-14 10:07
 *
 * By Susan Su
 */

'use strict';

import { RECEIVED_BOOK_TYPE, RECEIVED_BOOK_LIST, RECEIVED_SLIDE_DATA, RECEIVED_BOOK_DETAIL, RECEIVED_BOOK_RELATED_LIST} from '../constants/constants';
import reduceFactory from '../utils/reducerFactory';

const initialState = {
  bookType: [],
  bookList: [],
  sliderList:[],
  bookDetail: {}
};

const actionFunc = {
  //pageDanpin
  [RECEIVED_BOOK_TYPE]: (state, action) => ({bookType: action.data}),
  [RECEIVED_BOOK_LIST]: (state, action) => ({bookList:  Object.assign({}, state.bookList,
      { [action.endPoint]: action.data})}),
  [RECEIVED_SLIDE_DATA]: (state, action) => ({sliderList: action.data}),

  //bookdetail
  [RECEIVED_BOOK_DETAIL]: (state, action) => ({bookDetail: action.data}),
  [RECEIVED_BOOK_RELATED_LIST]: (state, action) => ({bookList: action.data.slice(0,3)}),

};

export default reduceFactory(initialState, actionFunc);