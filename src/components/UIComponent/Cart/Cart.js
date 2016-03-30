'use strict';

import React ,{ PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as TodoActions from '../../../actions/ShoppingCartActions';

import Cover from '../../Cover/Cover';
import ShowCart from '../../ShowCart/ShowCart';
import GoodsBox from '../../GoodsBox/GoodsBox';

import withStyles from '../../../decorators/withStyles';
import styles from './Cart.scss';

@withStyles(styles)
class Cart extends React.Component {

  componentDidMount() {
    this.props.actions.loadData(1);
  }

	render() {
    const { cover, data, actions } = this.props;
		return (
			<div className="Cart">
      { this.props.cover &&
        <Cover>
          <GoodsBox data={data} actions={actions} />
        </Cover>
      }
        <ShowCart data={data} modifyCover={actions.modifyCover}/>
			</div>
		);
	}
}


function mapStateToProps(state) {
  //console.log(state);
  return {
    cover: state.cover,
    data: state.cart
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);




