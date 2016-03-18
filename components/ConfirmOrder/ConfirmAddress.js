import React from 'react';

class ConfirmAddress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHaveAddress: 0,
    }
  }
  render() {
    let addressRow = this.state.isHaveAddress ?
      (<div className="address">
        <div className="location-icon"></div>
        <ul className="address-info clearfix">
          <li>
            <span className="address-name">范宇阳</span>
            <span className="address-phone">18672980526</span>
          </li>
          <li>
            <span className="address-location">武汉理工大学</span> 
          </li>
        </ul>  
        <div className="address-arrow" data-reactid=".0.1.0.0.0.1"></div>
      </div>)
      :
      (<div className="address-null">
        添加收货地址
        <div className="address-null-arrow"></div>         
      </div>);
    return(
      <div className="ConfirmAddress">
        {addressRow}
      </div>
    );
  }
}

export default ConfirmAddress;