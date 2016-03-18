import React from 'react';
import ConfirmAddress from './ConfirmAddress';
import ConfirmList from './ConfirmList';

class ConfirmContent extends React.Component {  
  render() {
    return (
      <div className="ConfirmContent">
        <form name="orderform" id="orderform">
          <ConfirmAddress />
          <ConfirmList data={this.props.data} />
          <div className="total-info">
            <div className="single-row clearfix">
              <span className="row-word-left">小计：</span>
              <span className="row-word-right">￥ 0.00</span>	         
            </div> 
            <div className="single-row clearfix ">
              <span className="row-word-left">运费：满10元包邮</span>
              <span className="row-word-right">￥ 0.00</span>
            </div> 
            <div className="single-row">        
              <div className="total-price-word">共
                <span id="total_count">4</span>
                <span className="txt-indent5">件商品</span>
                <span className="txt-indent">合计：</span>
                <span id="order_amount_span_submit" className="total-price-num">¥ 0.00</span>
              </div>
            </div> 
          </div>
        </form> 
      </div>
    );
  }
}

export default ConfirmContent;