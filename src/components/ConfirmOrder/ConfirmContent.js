import React from 'react';
import ConfirmAddress from './ConfirmAddress';
import ConfirmList from './ConfirmList';

class ConfirmContent extends React.Component {  
  render() {
    let money = 0, num = 0, total = 0, freight = 2.00,data = this.props.data;
    data.map( item => {
      money += parseInt(item.num, 10)*parseFloat(item.price).toFixed(2);
      num += parseInt(item.num);
    });
    total = money + freight;
    return (
      <div className="ConfirmContent">
        <form name="orderform" id="orderform">
          <ConfirmList data={data} />
          <div className="total-info">
            <div className="single-row clearfix">
              <span className="row-word-left">小计：</span>
              <span className="row-word-right money-falg">{money}</span>
            </div> 
            <div className="single-row clearfix ">
              <span className="row-word-left">运费：满10元包邮</span>
              <span className="row-word-right money-flag">{freight}</span>
            </div> 
            <div className="single-row">        
              <div className="total-price-word">共
                <span id="total_count">{num}</span>
                <span className="txt-indent5">件商品</span>
                <span className="txt-indent">合计：</span>
                <span id="order_amount_span_submit" className="total-price-num money-flag">{total}</span>
              </div>
            </div> 
          </div>
        </form> 
      </div>
    );
  }
}

export default ConfirmContent;