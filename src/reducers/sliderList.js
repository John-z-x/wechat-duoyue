'use strict';
import { RECEIVED_SLIDER_LIST } from '../constants/constants';

export const sliderList = ( state=[], action) => {
  switch(action.type) {

    //danpinIndex
    case RECEIVED_SLIDER_LIST:
      return action.data;

    default:
      return state;
  }
};

export default sliderList;