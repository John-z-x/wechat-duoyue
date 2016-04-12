'use strict';
import { RECEIVED_Article_DATA } from '../constants/constants';


export default function everyday(state = {}, action) {
  switch(action.type) {
    case RECEIVED_Article_DATA: 
     return action.data;
    default :
      return state;
  }
}