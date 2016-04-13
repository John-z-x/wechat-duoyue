'use strict';
import { RECEIVED_EVERYDAY_LIST, RECEIVED_EVERYDAY_LIST_DATA,RECEIVED_EVERYDAY_LIST_REMOVE} from '../constants/constants';


export default function everyday(state = [], action) {
  switch(action.type) {
    case RECEIVED_EVERYDAY_LIST: 
     return action.list;
    case RECEIVED_EVERYDAY_LIST_DATA: 
     return state.concat(action.data);
    case RECEIVED_EVERYDAY_LIST_REMOVE:
     return [];
    default :
      return state;
  }
}