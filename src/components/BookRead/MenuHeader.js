import React from 'react';

import withStyles from '../../decorators/withStyles';
import styles from './ArticleHeader.scss';

@withStyles(styles)
class MenuHeader extends React.Component{
	hideCatalog(){
    document.getElementById('catalog_area').style.display="none";
  }
	render(){
		let continueSrc = require('../../../assets/images/articleImages/continue.png'),
				fontSrc = require('../../../assets/images/articleImages/font.png'),
				discussSrc = require('../../../assets/images/articleImages/discuss.png');
		return (
					<div className="ArticleHeader" id="MenuHeader">
					  <div className="article-top article-wrap" id="top">
				      <div onclick="window.history.back();" className="article-return">
				        <img src={continueSrc} className="articleIcon-continue" onClick={this.hideCatalog}/>
				      </div>
				      <img  src={fontSrc} className="articleIcon-font" id="articleIcon"/>
				      <a className="articleIcon articleIcon-link" href="">
				        <img id="articleIcon2" src={discussSrc} className="articleIcon-discuss"/>
				      </a>
				      <div className="clearfix"></div>
				    </div>
					</div>
			);
		}
	}
	export default MenuHeader;