import React from 'react';
import { Link } from 'react-router';

class GoodsSearchInput extends React.Component {
  render() {
    return (
      <div className="goods-search">
          <div className="goods-search-div left clearfix">
              <div className="goods-search-img left" ></div>
              <input className="goods-search-input left" id="search_input" name="search_input" value="" placeholder="输入商品关键字" />
          </div>
          <Link to={`/shop/goodslist/0`}>
            <input className="goods-search-buttom right" type="submit" value="搜索" />
          </Link>
      </div>
    );
  }
}

export default GoodsSearchInput;