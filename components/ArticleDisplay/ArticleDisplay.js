import React from 'react';
import Article from './Article';
import Commodity from './Commodity';
import ContentRelate from './ContentRelate';
import ToEveryday from './ToEveryday';

import CommonHeader from '../HeaderComponents/CommonHeader';
import ReturnButton  from '../HeaderComponents/ReturnButton';

import withStyles from '../../decorators/withStyles';
import styles from './ArticleDisplay.scss';

@withStyles(styles)
class ArticleDisplay extends React.Component {
  render() {
   console.log(this.props.params.id);
  	return(
  		<div className="ArticleDisplay">
        <CommonHeader>
          <ReturnButton />
        </CommonHeader>
        <Article/>
        <Commodity/>
        <ContentRelate/>
        <ToEveryday/>
      </div>
  	);
  }
}

export default ArticleDisplay;