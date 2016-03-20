
'use strict';
import fetch from 'isomorphic-fetch';

export function addGoods(id, num, showAlert) {
  return dispatch => {
    return fetch('/MockData/add_goods_data.js')
        .then(response => response.json())
        .then(json=> {
          showAlert();
          return dispatch(receivedAddGoods(id, json, num))
        })
  }
}

function receivedAddGoods(id, json, num) {
  return {
    type: "ADD_GOODS",
    id: id,
    json: json,
    num: num,
    success: true
  }
}