import React from 'react';

import withStyles from '../../decorators/withStyles';
import styles from './ConfirmOrder.scss';

import fetch from 'isomorphic-fetch';

import CommonHeader from '../HeaderComponents/CommonHeader';
import ReturnButton from '../HeaderComponents/ReturnButton';
import HeaderTitle from '../HeaderComponents/HeaderTitle';
import Modal from '../Modals/Modal';

import ConfirmContent from './ConfirmContent';
import WeChatPayBottom from './WeChatPayBottom';
import AddressEditor from './AddressEditor';
import ConfirmAddress from './ConfirmAddress';

const Orderdata = [
  {"id": 6223 ,"title":"他来了请闭眼","price": 31.50 ,"coverURL":"http://file.duoyue.me/upload/book/book/20151207/2015_12_07_095558591.jpg","count": 1 },
  {"id": 5927 ,"title":"大清相国","price": 38.00 ,"coverURL":"http://file.duoyue.me/upload/book/book/20151118/2015_11_18_135906207.jpg","count": 2 },
  {"id": 6227 ,"title":"微微一笑很倾城","price": 17.34 ,"coverURL":"http://file.duoyue.me/upload/book/book/20151214/2015_12_14_170654945.jpg","count": 1 }
]


@withStyles(styles)
class ConfirmOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addressInfo: false,
      addressModal: false,
      goods: []
    };
    this.showAddressEditor = this.showAddressEditor.bind(this);
    this.submitAddress = this.submitAddress.bind(this);
  }

  componentDidMount() {
    let _self = this;
    fetch('../MockData/data.js')
      .then(response => response.json())
      .then(json => _self.setState({
          goods: json
        }))
  }

  showAddressEditor() {
    this.setState({
      addressModal: true
    })
  }

  submitAddress(info) {
    if(info) {
      this.setState({
        addressModal: false,
        addressInfo: info
      })
    }else {
      this.setState({
        addressModal: false
      })
    }
  }

  render() {
    return (
      <div className="ConfirmOrder">
         <CommonHeader>
           <ReturnButton/>
           <HeaderTitle title="确认订单"/>
         </CommonHeader>
         <ConfirmAddress addressInfo={this.state.addressInfo} showAddressEditor={this.showAddressEditor}/>
         <ConfirmContent data={this.state.goods} />
         <WeChatPayBottom />
      {
        this.state.addressModal &&
        <Modal>
          <AddressEditor info={this.state.addressInfo} submitAddress={this.submitAddress}/>
        </Modal>
      }
      </div>
    );
  }
}

export default ConfirmOrder;