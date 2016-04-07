import React from 'react';
import CommodityNumModify from './CommodityNumModify';
import DoCommodity from './DoCommodity';

//商品列表
class CommoditysItem extends React.Component {

  getNum() {
    return {
      id: this.props.data.id,
      num: this.refs.num.getNum()
    }
  }

  render() {
    let data = this.props.data;
    return (
      <li className="CommoditysItem  flex clearfix">
        <div className="item-img left">
          <img src={data.headurl} alt="图片" title="图片" width="90" height="120"/>
        </div>
        <div className="item-detail left">
          <div className="title">{data.title}</div>
          <div className="desc">{data.size}</div>
          <div className="price-number clearfix">
            <div className="oneprice left">¥{data.price}</div>
            <CommodityNumModify id={data.id} ref="num"/>
          </div>
          <DoCommodity getNum={this.getNum.bind(this)}/>
        </div>
      </li>
    );
  }
}

export default CommoditysItem;