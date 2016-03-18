import React from 'react';

class AddressEditor extends React.Component {
  render() {
    return(
      <div className="AddressEditor">
        <div className="address-header">
          收货地址
          <div className="close-btn"></div>
        </div>
        <form className="address-form">
          <div className="address-item">
            <label htmlFor="fullname">收货人</label>
            <input className="address-editor-name" type="text" name="fullname" placeholder="请输入收货人姓名"/>
          </div>
          <div className="address-item">
            <label htmlFor="telephone">联系电话</label>
            <input className="address-editor-phone" type="text" name="telephone" placeholder="请输入联系电话"/>
          </div>
          <div className="address-item">
            <label htmlFor="addressDetail">地址</label>
            <input className="address-editor-location" type="text" name="addressDetail" placeholder="请输入收货地址"/>
          </div>
        </form>
        <div className="address-submit">
          <div className="submit-btn">保存地址</div>
        </div>
      </div>
    );
  }
}

export default AddressEditor; 