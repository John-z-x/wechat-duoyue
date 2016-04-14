/*
 * Created on 2016-04-12 14:43
 *
 * By Susan Su
 */

'use strict';

import { RECEIVED_SLIDE_DATA, RECEIVED_PRODUCT_TYPE, RECEIVED_HOT_NEWS, RECEIVED_PRODUCT_LIST, } from '../constants/constants';
import reduceFactory from '../utils/reducerFactory';

const initialState = {
  productType: [],
  productList: [],
  slideList: []
};

const actionFunc = {
	[RECEIVED_HOT_NEWS]: (state, action) => ({hotNews: action.data}),
  [RECEIVED_PRODUCT_TYPE]: (state, action) => ({productType: action.data}),
  [RECEIVED_PRODUCT_LIST]: (state, action) => ( {productList:  Object.assign( {}, state.productList,
      { [action.endPoint]: action.data} )} ),
  [RECEIVED_SLIDE_DATA]: (state, action) => ({slideList: action.data})
}
 
export default reduceFactory(initialState, actionFunc);

