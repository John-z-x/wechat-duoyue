import React from 'react';
import { Link } from 'react-router';


class WeChatPaySend extends React.Component {
  render() {
    return (
      <div className="WeChatPaySend">
        <div className="payment-sending">
          <div className="sending-title">理工RAYS微信支付</div>
          <div className="sending-detail">
            <ul>
              <li>
                <span>金额：</span>
                <span>30.00</span>
              </li>
              <li>
                <span>单号：</span>
                <span>201600246270413113113748</span>
              </li>
            </ul>
          </div>
          <div className="sending-msg">
          正在发起支付请求...
          </div>
        </div>
      </div>  
    );
  }
}

export default WeChatPaySend;