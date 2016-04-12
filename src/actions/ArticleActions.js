'use strict';
import fetch from 'isomorphic-fetch';
import { RECEIVED_Article_DATA } from '../constants/constants';

export function articleInfoLoad() {
  return dispatch => {
    var json = require('../../assets/MockData/article_data.json');
    return dispatch(receiveArticleData(json));
  }
}

function receiveArticleData(data) {
  return {
    type: RECEIVED_Article_DATA,
    data
  }
}
