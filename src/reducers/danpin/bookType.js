'use strict';
import { RECEIVED_BOOK_TYPE } from '../../constants/constants';

export const bookType = ( state=[], action) => {
  switch(action.type) {

    //danpinIndex
    case RECEIVED_BOOK_TYPE:
      return action.data;

    //
    default:
      return state;
  }
};

export default bookType;