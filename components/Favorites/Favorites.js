import React from 'react';
import FavoritesBook from './FavoritesBook';
import FavoritesArticle from './FavoritesArticle';

import CommonHeader from '../../components/HeaderComponents/CommonHeader';
import Tab from '../../components/TabUIComponent/Tab';
import ReturnButton from '../HeaderComponents/ReturnButton';


import withstyles from '../../decorators/withStyles';
import styles from './Favorites.scss';


let TabItemsData = {
  content: [
    "书籍", "文章"
  ],
  tabClass: {
    tabBox: "favorites-classify  clearfix",
    tabItemOn: "favorites-type type-over",
    tabItemDefault: "favorites-type"
  }
}


let dataArray = {
  bookData: [
    {src:'http://file.duoyue.me/upload/book/book/20151118/2015_11_18_135906207_cut_c.jpg',bookName:'销魂殿'},
    {src:'http://file.duoyue.me/upload/book/book/20151118/2015_11_18_135906207_cut_c.jpg',bookName:'华胥引'},
    {src:'http://file.duoyue.me/upload/book/book/20151128/2015_11_28_094742682_cut_c.jpg',bookName:'销魂殿'},
    {src:'http://file.duoyue.me/upload/book/book/20151128/2015_11_28_094742682_cut_c.jpg',bookName:'华胥引'},
    {src:'http://file.duoyue.me/upload/book/book/20151214/2015_12_14_170654945_cut_c.jpg',bookName:'华胥引华胥引华胥引华胥引'}
  ],
  articleData: [
    {title:"【实用】这份年终总结PPT称第二，没人敢称第一"},
    {title:"【实用】这份年终总结PPT称第二，没人敢称第一"},
    {title:"【实用】这份年终总结PPT称第二，没人敢称第一"}
  ]
};

@withstyles(styles)
class Favorites extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			type: 0
		}
		this.onTypeChange = this.onTypeChange.bind(this);
	}

	onTypeChange(index) {
		this.setState({
			type:index
		})
	}


	render() {
    let ContentCode, state = this.state.type;
    if( state == 0) {
      ContentCode = <FavoritesBook data={dataArray} />;
    }else if( state == 1) {
      ContentCode = <FavoritesArticle data={dataArray}/>;
    }
		return (
			<div className="Favorites">
				<CommonHeader>
			   < ReturnButton />
			  </CommonHeader>
				<Tab TabItemsData={TabItemsData} onTypeChange={this.onTypeChange}/>
        {ContentCode}
			</div>
		);
	}
};

export default Favorites;