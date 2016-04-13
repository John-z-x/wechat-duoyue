'use strict';
import { RECEIVED_BOOK_LIST } from '../../constants/constants';

export const bookList = ( state=[], action) => {
  switch(action.type) {

    //danpinIndex
    case RECEIVED_BOOK_LIST:
      return Object.assign({}, state,
          { [action.endPoint]: action.data}
      );

    default:
      return state;
  }
};

export default bookList;