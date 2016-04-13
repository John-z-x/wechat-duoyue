import React from 'react';
import CommonHeader from '../HeaderComponents/CommonHeader';
import ReturnButton  from '../HeaderComponents/ReturnButton';
import HeaderTitle from '../HeaderComponents/HeaderTitle';
import { Link } from 'react-router';


class WeChatPayHome extends React.Component {
  render() {
    return (
      <div className="WeChatPayHome">
        <CommonHeader>
          <ReturnButton/>
          <HeaderTitle title="确认支付"/>
        </CommonHeader>
        <div className="confirm-payment">
          <div className="payment-title">理工RAYS微信支付</div>
          <div className="payment-detail">
            <ul>
              <li>
                <span>订单号：</span>
                <span>0413101611106</span>
              </li>
              <li>
                <span>金额：</span>
                <span>30.00</span>
              </li>
              <li>
                <span>商品：</span>
                <span>三生三世枕上书</span>
                <span>三生三世枕上书</span>
                <span>三生三世枕上书</span>
              </li>
            </ul>
          </div>
          <Link to="/pay/paysend">
            <div className="payment-btn">确认并支付</div>
          </Link>
        </div>
      </div>  
    );
  }
}

export default WeChatPayHome;