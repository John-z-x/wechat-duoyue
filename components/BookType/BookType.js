import React from 'react';
import CommodityDetailTop from '../CommodityDetail/CommodityDetailTop';
import BookListContent from './BookListContent';
import withStyles from '../../decorators/withStyles';
import styles from './BookType.scss';

import Tab from '../TabUIComponent/Tab';
import BookClassify from './BookClassify';
import CommonHeader from '../HeaderComponents/CommonHeader';
import ReturnButton from '../HeaderComponents/ReturnButton';
import SearchButton from '../HeaderComponents/SearchButton';

let TabItemsData = {
  content: [
    "出版", "榜单", "分类"
  ],
  tabClass: {
    tabBox: "BookListType source-classify clearfix",
    tabItemOn: "source-type-over",
    tabItemDefault: "source-type"
  }
}

@withStyles(styles)
class BookType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 0
    }
    this.onTypeChange = this.onTypeChange.bind(this);
  }

  onTypeChange(index) {
    this.setState({
      type: index
    })
  }

  render() {
    let ContentCode, state = this.state.type;
    if( state == 0) {
      ContentCode = <BookListContent />;
    }else if( state == 1) {
      ContentCode = <BookListContent />;
    }else if( state == 2) {
      ContentCode = <BookClassify />;
    }
  	return(
  		<div className="BookType">
      	<CommonHeader>
          <ReturnButton />
          <SearchButton />
        </CommonHeader>
      	<Tab TabItemsData={TabItemsData} onTypeChange={this.onTypeChange}/>
        {ContentCode}
      </div>
  	);
  }
};

export default BookType;