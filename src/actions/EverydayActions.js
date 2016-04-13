'use strict';
import fetch from 'isomorphic-fetch';
import { RECEIVED_EVERYDAY_LIST, RECEIVED_EVERYDAY_LIST_DATA,RECEIVED_EVERYDAY_LIST_REMOVE } from '../constants/constants';

export function everydayListLoad() {
  return dispatch => {
    var json = require('../../assets/MockData/everydaylist_data.json');
    return dispatch(receivedEverydayList(json));
  }
}

export function everydayListRemove() {
  return {
    type: RECEIVED_EVERYDAY_LIST_REMOVE
  }
}

export function everydayListLoadMore(data) {
  return dispatch => {
    return dispatch(receivedEverydayListData(data));
  }
}

function receivedEverydayListData(data) {
  return {
    type: RECEIVED_EVERYDAY_LIST_DATA,
    data
  }
}

function receivedEverydayList(list) {
  return {
    type: RECEIVED_EVERYDAY_LIST,
    list
  }
}