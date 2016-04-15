import React from 'react';
import Alert from '../Modals/Alert';
class AddressEditor extends React.Component {

  closeModal(ifSubmit) {
    let submit = this.props.submitAddress;
    const name = this.refs.name.value.trim(),
          phoneNumber = this.refs.phoneNumber.value.trim(),
          address = this.refs.address.value.trim();
    if (name && phoneNumber && address) {
      if(ifSubmit) {
        submit({
          name: name,
          phoneNumber: phoneNumber,
          address: address
        });
      }else {
        submit(false);
      }
    } else {
      alert("必须全都填写额！");
    }
    
  }

  render() {
    const data = this.props.info || {};
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
            <input className="address-editor-name" ref="name" type="text" name="fullname" placeholder="请输入收货人姓名" defaultValue={name}/>
          </div>
          <div className="address-item">
            <label htmlFor="telephone">联系电话</label>
            <input className="address-editor-phone" ref="phoneNumber" type="text" name="telephone" placeholder="请输入联系电话" defaultValue={phoneNumber}/>
          </div>
          <div className="address-item">
            <label htmlFor="addressDetail">地址</label>
            <input className="address-editor-location" ref="address" type="text" name="addressDetail" placeholder="请输入收货地址" defaultValue={address}/>
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