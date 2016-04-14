'use strict';
import { RECEIVED_SLIDE_DATA } from '../constants/constants';


export default function slide(state = [], action) {
  switch(action.type) {
    case RECEIVED_SLIDE_DATA:
      return action.data;
     
    default :
      return state;
  }
}