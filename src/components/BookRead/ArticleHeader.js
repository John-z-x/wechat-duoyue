import React from 'react';

import withStyles from '../../decorators/withStyles';
import styles from './ArticleHeader.scss';

@withStyles(styles)
class ArticleHeader extends React.Component{
	showCatalog(){
		document.getElementById('catalog_area').style.display="block";
	}
	toggle(){
		let display = document.getElementById('StyleBox').style.display;
		if (display=='none'){
			document.getElementById('StyleBox').style.display = 'block';
		}
		else {
			document.getElementById('StyleBox').style.display = 'none';
		}
	}
	render(){
		let backCheckImgSrc = require('../../../assets/images/articleImages/back_check.png'),
				fontSrc = require('../../../assets/images/articleImages/font.png'),
				discussSrc = require('../../../assets/images/articleImages/discuss.png'),
				menuSrc = require('../../../assets/images/articleImages/menu.png');
		return (
					<div className="ArticleHeader" id="ArticleHeader">
					  <div className="article-wrap" id="top">
				      <div onclick="window.history.back();" className="article-return">
				        <img src={backCheckImgSrc} className="articleIcon-return"/>
				      </div>
				      <img  src={fontSrc} className="articleIcon-font" id="articleIcon" onClick={this.toggle}/>
				      <a className="articleIcon articleIcon-link" href="">
				        <img id="articleIcon2" src={discussSrc} className="articleIcon-discuss"/>
				      </a>
				      <a id="catalogMenu" className="articleIcon catalogMenu" href="#">
				        <img id="articleIcon1" src={menuSrc} className="articleIcon-menu" onClick={this.showCatalog}/>
				      </a>  
				      <div className="clearfix"></div>
				    </div>
					</div>
			);
		}
	}
	export default ArticleHeader;
