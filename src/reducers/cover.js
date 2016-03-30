'use strict';
import {  MODIFY_COVER_DIS } from '../constants/constants';
let cover = false;

export default function (state = cover, actions) {
	switch(actions.type) {
		case MODIFY_COVER_DIS:
		  return !state

		default :
		  return state
	}
}

