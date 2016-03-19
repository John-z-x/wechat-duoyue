
'use strict';
import fetch from 'isomorphic-fetch';

export function ModifyNum(id, num) {
  return { "type": "MODIFY_NUM", id, num }
}

export function DeleteItem(id) {
  return { "type": "DELETE_ITEM", id}
}

export function ModifyCover(text) {
	return { "type": "MODIFY_COVER_DIS", text}
}

export function LoadData(text) {
	return dispatch => {
	    dispatch(fetchPosts(text));
	  }
}

function requestPosts(reddit) {
  return {
    type: "REQUEST_POSTS",
    reddit
  }
}

function receivePosts(text, json) {
  return {
  	type: "RECEIVED_POSTS",
    text: text,
    data: json,
    time: Date.now()
  }
}

function fetchPosts(text) {
	let url;
  return dispatch => {
  	//dispatch(requestPosts(text))
  	if(text === 1 ) {
  		url = '/MockData/dataTest.js';
  	}else {
  		url = '/MockData/data.js';
  	}
  	return fetch(url)
      .then( response => response.json())
  	  .then(json=> dispatch(receivePosts(text, json)))
  }
}

