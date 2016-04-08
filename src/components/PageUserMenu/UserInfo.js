import React from 'react';
import {Link} from 'react-router';

class UserInfo extends React.Component {
  render() {
    let {data} = this.props;
    return (
        <div className='UserInfo clearfix '>
          <div className='left user-new-img'>
            <img src={data.src} alt="头像" title="头像"/>
            <div className='user-name'>{data.name}</div>
          </div>
          <div className="right user-table">
            <div className="user-table-td">
              <Link to="/favorites">
                <div>6</div>
                <div className="word">收藏</div>
              </Link>
            </div>
            <div className="user-table-td border-aside">
              <Link to="/userintegration">
                <div>5</div>
                <div className="word">积分</div>
              </Link>
            </div>
            <div className="user-table-td">
              <Link to="/orderlist">
                <div>7</div>
                <div className="word">订单</div>
              </Link>
            </div>
          </div>
        </div>
    );
  }
}

export default UserInfo;