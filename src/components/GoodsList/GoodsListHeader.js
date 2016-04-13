import React from 'react';
import CommonHeader from '../HeaderComponents/CommonHeader';
import ReturnButton  from '../HeaderComponents/ReturnButton';
import SearchButton from '../HeaderComponents/SearchButton';
import { Link } from 'react-router';

class GoodsListHeader extends React.Component {
  render() {
    return (
        <CommonHeader>
          <ReturnButton />
          <Link to={`/shop/goodssearch`}>
            <SearchButton />
          </Link>
        </CommonHeader>
    );
  }
}

export default GoodsListHeader;