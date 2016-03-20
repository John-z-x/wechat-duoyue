import React from 'react';

class ConfirmAddress extends React.Component {
  render() {
    let addressInfo = this.props.addressInfo;
    let addressRow = addressInfo ?
      (<div className="address">
        <div className="location-icon"></div>
        <ul className="address-info clearfix">
          <li>
            <span className="address-name">{addressInfo.name}</span>
            <span className="address-phone">{addressInfo.phoneNumber}</span>
          </li>
          <li>
            <span className="address-location">{addressInfo.address}</span>
          </li>
        </ul>  
        <div className="address-arrow"></div>
      </div>)
      :
      (<div className="address-null">
        添加收货地址
        <div className="address-null-arrow"></div>         
      </div>);
    return(
      <div className="ConfirmAddress" onClick={this.props.showAddressEditor}>
        {addressRow}
      </div>
    );
  }
}

export default ConfirmAddress;