'use strict';
import { RECEIVED_SLIDE_DATA } from '../constants/constants';


export default function slide(state = [], action) {
  switch(action.type) {
    // case RECEIVED_SLIDE_DATA:
    //  switch(action.typeIndex){
    //   case "everydaySlide":
    //     return action.data.everydaySlide;
    //   case "sourceSlide":
    //     return action.data.sourceSlide;
    //   default:
    //     return action.data.default;
    //   }
     
    default :
      return state;
  }
}