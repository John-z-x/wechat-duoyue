import React from 'react';

//立即购买 加入购物车
class DoCommodity extends React.Component {
  render() {
    return(
      <div className="doCommodity clearfix">
        <div className="buy-immediate left">立即购买</div>
        <div className="addto-shopcar right">加入购物车</div>
      </div>
    );
  }
}

export default DoCommodity;