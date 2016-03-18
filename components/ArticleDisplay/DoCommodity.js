import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as addGoodsActions from '../../actions/AddGoodsToCartActions';
//立即购买 加入购物车
class DoCommodity extends React.Component {

  addToCart() {
    const { num, id } = this.props.getNum();
    this.props.actions.addGoods(id, num);
  }
  render() {
    return(
      <div className="doCommodity clearfix">
        <Link to="/confirmorder" >
          <div className="buy-immediate left">立即购买</div>
        </Link>
        <div className="addto-shopcart right" onClick={this.addToCart.bind(this)}>加入购物车</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
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