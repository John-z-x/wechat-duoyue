'use strict';
import fetch from 'isomorphic-fetch';
import { RECEIVED_COMMENT, ADD_COMMENT, TOGGLE_PRAISE } from '../constants/constants';


const addComment = (text) => {
  return {
    type: ADD_COMMENT,
    text: text
  };
};


// export const addCommentTo = (url) => {
//   fetch(url, {
//     method: 'POST',
//     header: {

//     },
//     body: "",
//   }).then(function(res){
//     if (res.ok) {

//     } else if (res.status == 401) {

//     }
//   });
// };

export const togglePraise = (id) => {
  return {
    type: TOGGLE_PRAISE,
    id
  };
};

const receivedComment = (json) => {
  return {
    type: RECEIVED_COMMENT,
    data: json,
  };
};


export const fetchComment = (url) => {
  return dispatch => {
    let data = require('../../assets/MockData/comment_data.json');
    if (url === "1") {
      data = data.comments;
    } else if (url === "2") {
      data = data.addComments;
    } else if (url === "3") {
      data = data.socialComments;
    }
    return dispatch(receivedComment(data));

    //fetch(url)
    //  .then( response => response.json())
    // .then(json=> dispatch(receivedComment(text, json)))
  };
};


