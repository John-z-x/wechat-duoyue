import React from 'react';
import CommonHeader from '../HeaderComponents/CommonHeader';
import ReturnButton  from '../HeaderComponents/ReturnButton';
import SearchButton from '../HeaderComponents/SearchButton';

class GoodsListHeader extends React.Component {
  render() {
    return (
        <CommonHeader>
          <ReturnButton />
          <SearchButton />
        </CommonHeader>
      //<div className="header">
      //  <span className="click-goback left"></span>
      //  <span className="search-goods right"></span>
      //</div>
    );
  }
}

export default GoodsListHeader;