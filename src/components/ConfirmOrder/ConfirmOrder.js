import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import withStyles from '../../decorators/withStyles';
import styles from './ConfirmOrder.scss';
import { loadData } from '../../actions/ShoppingCartActions';

import CommonHeader from '../HeaderComponents/CommonHeader';
import ReturnButton from '../HeaderComponents/ReturnButton';
import HeaderTitle from '../HeaderComponents/HeaderTitle';
import Modal from '../Modals/Modal';

import ConfirmContent from './ConfirmContent';
import WeChatPayBottom from './WeChatPayBottom';
import AddressEditor from './AddressEditor';
import ConfirmAddress from './ConfirmAddress';

@withStyles(styles)
class ConfirmOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addressInfo: false,
      addressModal: false
    };
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

  componentWillMount() {
    this.props.loadData();
  }

  render() {
    let { list } = this.props, { addressInfo, addressModal } = this.state;
    return (
      <div className="ConfirmOrder">
         <CommonHeader>
           <ReturnButton/>
           <HeaderTitle title="确认订单"/>
         </CommonHeader>
         <ConfirmAddress addressInfo={addressInfo} showAddressEditor={::this.showAddressEditor}/>
         <ConfirmContent data={list} />
         <WeChatPayBottom />
      {
        addressModal &&
        <Modal>
          <AddressEditor info={addressInfo} submitAddress={::this.submitAddress}/>
        </Modal>
      }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    list: state.cart
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadData: bindActionCreators(loadData, dispatch)
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ConfirmOrder);