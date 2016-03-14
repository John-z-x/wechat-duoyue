import React from 'react';
import Article from './Article';
import Commodity from './Commodity';
import ContentRelate from './ContentRelate';
import ToEveryday from './ToEveryday';
import withStyles from '../../decorators/withStyles';
import styles from './ArticleDisplay.scss';

@withStyles(styles)
class ArticleDisplay extends React.Component {
  render() {
   //console.log(this.props.parmas.id);
  	return(
  		<div className="ArticleDisplay">
        <Article/>
        <Commodity/>
        <ContentRelate/>
        <ToEveryday/>
      </div>
  	);
  }
}

export default ArticleDisplay;