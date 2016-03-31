import React from 'react';

import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Modal from '../Modals/Modal';
import Alert from '../Modals/Alert';

import * as addGoodsActions from '../../actions/AddGoodsToCartActions';

const alertContentSuccess = {
  "img": require("../../../assets/images/top/save.png"),
  "content": "添加成功"
};

//立即购买 加入购物车
class DoCommodity extends React.Component {

  constructor(props) {
    super(props);
      this.state  = {
        displayModal: false
      }
    this.showAlert = this.showAlert.bind(this);
  }

  addToCart() {
    const { num, id } = this.props.getNum();
    this.props.actions.addGoods(id, num, this.showAlert);
  }

  showAlert() {
    debugger;
    this.setState({
      displayModal: true
    });
    this.alertTimer = window.setTimeout( () => {
      this.setState({
        displayModal: false
      });
    }, 2000)
  }

  componentWillUnmount() {
    window.clearTimeout(this.alertTimer);
  }

  render() {
    return(
      <div className="DoCommodity clearfix">
        <Link to="/confirmorder" >
          <div className="buy-immediate left">立即购买</div>
        </Link>
        <div className="addto-shopcart right" onClick={this.addToCart.bind(this)}>加入购物车</div>
        {
          this.state.displayModal &&
          <Alert content={alertContentSuccess}/>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    goods: state.data
  };
}

function mapDispatchToProps(dispatch) {
  return {
     actions: bindActionCreators(addGoodsActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DoCommodity);