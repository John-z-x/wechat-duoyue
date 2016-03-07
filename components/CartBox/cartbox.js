'use strict'
import React ,{ PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as TodoActions from '../../actions/shoppingCartAction.js';

import Cover from '../Cover/Cover.js';
import ShowCart from '../ShowCart/ShowCart.js';
import GoodsBox from '../GoodsBox/GoodsBox.js';

class CartBox extends React.Component {

  componentDidMount() {
    this.props.actions.LoadData();
  }

	render() {
    const { cover, data, actions } = this.props;
		return (
			<div className="cartbox">

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
)(CartBox);




