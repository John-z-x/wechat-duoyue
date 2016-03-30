'use strict';
import fetch from 'isomorphic-fetch';
import { MODIFY_GOODS_NUM, DELETE_GOODS_ITEM, MODIFY_COVER_DIS, REQUEST_CART, RECEIVED_CART } from '../constants/constants.js';

export function modifyGoodsNum(id, num) {
  return {
    type: MODIFY_GOODS_NUM,
    id,
    num
  }
}

export function deleteGoodsItem(id) {
  return {
    type: DELETE_GOODS_ITEM,
    id
  }
}

export function modifyCover(text) {
  return {
    type: MODIFY_COVER_DIS,
     text
  }
}

export function loadData(text) {
  return dispatch => {
    dispatch(fetchCart(text));
  }
}

function requestCart(reddit) {
  return {
    type: REQUEST_CART,
    reddit
  }
}

function receiveCart(text, json) {
  return {
    type: RECEIVED_CART,
    text: text,
    data: json,
    time: Date.now()
  }
}

function fetchCart(text) {
  let url;
  return dispatch => {
    //dispatch(requestCart(text))
    if(text === 1) {
      url = "../../assets/MockData/dataTest.json";
    } else {
      url = '../../assets/MockData/data.json';
    }
    var data = require('../../assets/MockData/dataTest.json');
    return dispatch(receiveCart(text, data));

    //fetch(url)
    //  .then( response => response.json())
    // .then(json=> dispatch(receiveCart(text, json)))
  }
}

