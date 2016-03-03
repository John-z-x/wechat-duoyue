'use strict'
import React ,{ PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as TodoActions from '../../actions/shoppingCartAction.js'

var Cover = require('../Cover/cover.js');
var ShowCart = require('../ShowCart/showcart.js');
var GoodsBox = require('../GoodsBox/goodsbox.js');

class CartBox extends React.Component {
  constructor(props) {
    super(props)
  }
  
  componentDidMount() {
    this.props.actions.LoadData();
  }

	render() {
    const { cover, data, actions } = this.props
		return (
			<div className="cartbox">

				<Cover cover={cover}>
          <GoodsBox data={data} actions={actions} />
        </Cover>

        <ShowCart data={data} ModifyCover={actions.ModifyCover}/>
				
			</div>
		)
	}
}


function mapStateToProps(state) {
  //console.log(state);
  return {
    cover: state.cover,
    data: state.data
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartBox)




