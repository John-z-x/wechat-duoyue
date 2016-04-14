/*
 * Created on 2016-04-14 10:07
 *
 * By Susan Su
 */

'use strict';

import { RECEIVED_BOOK_TYPE, RECEIVED_BOOK_LIST, RECEIVED_SLIDER_LIST } from '../../constants/constants';
import reduceFactory from '../../utils/reducerFactory';

const initialState = {
  bookType: [],
  bookList: [],
  sliderList:[]
};

const actionFunc = {
  [RECEIVED_BOOK_TYPE]: (state, action) => ({bookType: action.data}),
  [RECEIVED_BOOK_LIST]: (state, action) => ({bookList:  Object.assign({}, state,
      { [action.endPoint]: action.data})}),
  [RECEIVED_SLIDER_LIST]: (state, action) => ({sliderList: action.data})
}

export default reduceFactory(initialState, actionFunc);