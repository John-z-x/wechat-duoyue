
'use strict';
import fetch from 'isomorphic-fetch';
import { ADD_GOODS_TO_CART } from '../constants/constants';

export function addGoods(id, num, showAlert) {
  return dispatch => {
    var json = require('../../assets/MockData/add_goods_data.json');
    showAlert();
    return dispatch(receivedAddGoods(id, json, num))

  //  return fetch('../../../assets/MockData/add_goods_data.json')
  //      .then(response => response.json())
  //      .then(json=> {
  //        showAlert();
  //        return dispatch(receivedAddGoods(id, json, num))
  //      })
  }
}

function receivedAddGoods(id, json, num) {
  return {
    type: ADD_GOODS_TO_CART,
    id: id,
    json: json,
    num: num,
    success: true
  }
}