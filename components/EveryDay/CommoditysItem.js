import React from 'react';
import CommoditysNumModify from './CommoditysNumModify.js';
import DoCommodity from './DoCommodity.js';
//商品列表
class CommoditysItem extends React.Component {
  render() {
    var data = this.props.data;
    //console.log(data.id);
    return (
      <li className="commoditys-item clearfix flex">
        <div className="commoditys-img left">
          <img src={data.headurl} alt="图片" width="90" height="120"/>
        </div>
        <div className="commoditys-detail left">
          <div className="commoditys-title">{data.title}</div>
          <div className="commoditys-size">{data.size}</div>
          <div className="commoditys-price clearfix">
            <div className="oneprice left">¥{data.price}</div>
            <CommoditysNumModify num={data.num} id={data.id}/>
          </div>
          <DoCommodity/>
        </div>
      </li>
    );
  }
}

export default CommoditysItem;