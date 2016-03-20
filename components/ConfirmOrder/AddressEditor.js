import React from 'react';

class AddressEditor extends React.Component {

  closeModal(ifSubmit) {
    let submit = this.props.submitAddress;
    if(ifSubmit) {
      submit({
        name: this.refs.name.value,
        phoneNumber: this.refs.phoneNumber.value,
        address: this.refs.address.value
      })
    }else {
      submit(false);
    }
  }
  render() {
    const data = this.props.info ? this.props.info : {};
    let name = data.name || null,
        phoneNumber = data.phoneNumber || null,
        address = data.address || null;
    return(
      <div className="AddressEditor">
        <div className="address-header">
          收货地址
          <div className="close-btn" onClick={ () => this.closeModal(false)}></div>
        </div>
        <form className="address-form">
          <div className="address-item">
            <label htmlFor="fullname">收货人</label>
            <input className="address-editor-name" ref="name" type="text" name="fullname" placeholder="请输入收货人姓名" value={name}/>
          </div>
          <div className="address-item">
            <label htmlFor="telephone">联系电话</label>
            <input className="address-editor-phone" ref="phoneNumber" type="text" name="telephone" placeholder="请输入联系电话" value={phoneNumber}/>
          </div>
          <div className="address-item">
            <label htmlFor="addressDetail">地址</label>
            <input className="address-editor-location" ref="address" type="text" name="addressDetail" placeholder="请输入收货地址" value={address}/>
          </div>
        </form>
        <div className="address-submit">
          <div className="submit-btn" onClick={() => this.closeModal(true)}>保存地址</div>
        </div>
      </div>
    );
  }
}

export default AddressEditor; 