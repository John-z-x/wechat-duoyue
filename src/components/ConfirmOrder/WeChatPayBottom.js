import React from 'react';
import { Link } from 'react-router';

class WeChatPayBottom extends React.Component {
  render() {
    return (
      <div className="WeChatPayBottom">
        <Link to={`/pay`}>
          <div className="wechatpay-btn">
            <span className="wechatpay-icon"></span>
            <span className="wechatpay-title">微信安全支付</span>
          </div>
        </Link>
      </div>
    );
  }
}

export default WeChatPayBottom;