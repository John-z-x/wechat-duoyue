import React from 'react';
import Article from './Article.js';
import Commodity from './Commodity.js';
import ContentRelate from './ContentRelate.js';
import ToEveryday from './ToEveryday.js';

class DetailBox extends React.Component {
  render() {
  	return(
  		<div className="detail-box">
        <Article/>
        <Commodity/>
        <ContentRelate/>
        <ToEveryday/>
      </div>
  	);
  }
}

export default DetailBox;