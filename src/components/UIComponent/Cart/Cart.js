'use strict';

import React ,{ PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as ShoppingCartActions from '../../../actions/ShoppingCartActions';

import Cover from '../../Cover/Cover';
import ShowCart from '../../ShowCart/ShowCart';
import GoodsBox from '../../GoodsBox/GoodsBox';

import withStyles from '../../../decorators/withStyles';
import styles from './Cart.scss';

@withStyles(styles)
class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coverShow: false
    }
  }

  modifyCover() {
    this.setState({
      coverShow: !this.state.coverShow
    })
  }

  componentDidMount() {
    this.props.actions.loadData(1);
  }

	render() {
    const { data, actions } = this.props, { coverShow } = this.state;
		return (
			<div className="Cart">
      { coverShow &&
        <Cover>
          <GoodsBox data={data} actions={actions} modifyCover={::this.modifyCover}/>
        </Cover>
      }
        <ShowCart data={data} modifyCover={::this.modifyCover}/>
			</div>
		);
	}
}


function mapStateToProps(state) {
  return {
    cover: state.cover,
    data: state.cart
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ShoppingCartActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);

Cart.propTypes = {
  cover: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    num: PropTypes.number.isRequired,
    headerUrl: PropTypes.string,
    choosed: PropTypes.bool.isRequired,
    size: PropTypes.string
  })).isRequired,
}



