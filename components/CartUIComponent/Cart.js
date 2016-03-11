'use strict';

import React ,{ PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as TodoActions from '../../actions/shoppingCartAction';

import Cover from '../Cover/Cover';
import ShowCart from '../ShowCart/ShowCart';
import GoodsBox from '../GoodsBox/GoodsBox';

import withStyles from '../../decorators/withStyles';
import styles from './Cart.scss';

@withStyles(styles)
class Cart extends React.Component {

  componentDidMount() {
    this.props.actions.LoadData(1);
  }

	render() {
    const { cover, data, actions } = this.props;
		return (
			<div className="Cart">
				<Cover cover={cover}>
          <GoodsBox data={data} actions={actions} />
        </Cover>
        <ShowCart data={data} ModifyCover={actions.ModifyCover}/>
			</div>
		);
	}
}


function mapStateToProps(state) {
  //console.log(state);
  return {
    cover: state.cover,
    data: state.data
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




