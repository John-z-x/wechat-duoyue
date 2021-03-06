'use strict';
import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as CommentActions from '../../actions/CommentActions';

import CommonHeader from '../HeaderComponents/CommonHeader.js';
import ReturnButton from '../HeaderComponents/ReturnButton';


import CommentBox from '../CommentBox/CommentBox';
import CommentList from '../CommentBox/CommentList.js';
import CommentForm from '../CommentBox/CommentForm.js';
import CommentCommonHeader from '../CommentBox/CommentCommonHeader';
import CommentWriteGuide from '../CommentBox/CommentWriteGuide';
import CommentItemPurchaseAdvice from '../CommentBox/CommentItemPurchaseAdvice';

import withStyles from '../../decorators/withStyles';
import styles from './BookConsult.scss';

@withStyles(styles)
class BookConsult extends React.Component {
	render() {
		const { onModifyCover, actions, data } = this.props;
		return (
			<div className="BookConsult main-wrap">
				<CommonHeader>
					<ReturnButton/>
				</CommonHeader>
				<CommentBox data={ data } actions={ actions } url="3">
					<CommentCommonHeader title="购买咨询" />
					<CommentList comments={ data } actions={actions} Item={CommentItemPurchaseAdvice} />
	        <CommentForm actions={ actions } id= { data.length }/>
				</CommentBox>
			</div>
		);
	}
}

function mapStateToProps(state) {
  return {
    data: state.comment,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CommentActions, dispatch)
  };
}

BookConsult = connect(
  mapStateToProps,
  mapDispatchToProps
)(BookConsult)


export default BookConsult;
