/*
 * Created on 2016-04-14 10:01
 *
 * By Susan Su
 */

'use strict';

export default function reducerFactory(initialState, actionFunc) {
  return (state = initialState, action) => {
    console.log(action.type);
    const reduceFn = actionFunc[action.type];
    if(!reduceFn) return state;

    return {...state, ...reduceFn(state, action) };
  }
}