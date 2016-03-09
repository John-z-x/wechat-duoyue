import React from 'react';
import Article from './Article';
import Commodity from './Commodity';
import ContentRelate from './ContentRelate';
import ToEveryday from './ToEveryday';

class ArticleDisplay extends React.Component {
  render() {
   //console.log(this.props.parmas.id);
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

export default ArticleDisplay;