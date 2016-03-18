import React from 'react';

import withStyles from '../../decorators/withStyles';
import styles from './ConfirmOrder.scss';

import { connect } from 'react-redux';
import { combineActionCreators } from 'redux';

//import { LoadData } from '../../actions/ShoppingCartAction';

import CommonHeader from '../HeaderComponents/CommonHeader';
import ReturnButton from '../HeaderComponents/ReturnButton';
import HeaderTitle from '../HeaderComponents/HeaderTitle';

import ConfirmContent from './ConfirmContent';
import WeChatPayBottom from './WeChatPayBottom';
import AddressEditor from './AddressEditor';

const Orderdata = [
  {"id": 6223 ,"title":"他来了请闭眼","price": 31.50 ,"coverURL":"http://file.duoyue.me/upload/book/book/20151207/2015_12_07_095558591.jpg","count": 1 },
  {"id": 5927 ,"title":"大清相国","price": 38.00 ,"coverURL":"http://file.duoyue.me/upload/book/book/20151118/2015_11_18_135906207.jpg","count": 2 },
  {"id": 6227 ,"title":"微微一笑很倾城","price": 17.34 ,"coverURL":"http://file.duoyue.me/upload/book/book/20151214/2015_12_14_170654945.jpg","count": 1 }
]

@withStyles(styles)
class ConfirmOrder extends React.Component {

  componentWillMount() {
    //console.log(this.props.LoadData)
    //this.props.LoadData();
  }

  render() {
    console.log(this.props.goods)
    return (
      <div className="ConfirmOrder">
         <CommonHeader>
           <ReturnButton/>
           <HeaderTitle title="确认订单"/>
         </CommonHeader>
         <ConfirmContent data={Orderdata} />
         <WeChatPayBottom />
         <AddressEditor />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    goods: state.data
  }
}

function mapDispatchToProps(dispatch) {
  return {
    //LoadData: ()=> dispatch(LoadData)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmOrder);