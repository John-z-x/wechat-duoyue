'use strict';
import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { modifyCover } from '../../../actions/ShoppingCartActions';
import * as CommentActions from '../../../actions/CommentActions';

import CommonHeader from '../../HeaderComponents/CommonHeader.js';
import ReturnButton from '../../HeaderComponents/ReturnButton';

import CommentBox from '../../CommentBox/CommentBox';
import CommentList from '../../CommentBox/CommentList.js';
import CommentForm from '../../CommentBox/CommentForm.js';
import CommentCommonHeader from '../../CommentBox/CommentCommonHeader';
import CommentWriteGuide from '../../CommentBox/CommentWriteGuide';
import CommentItem from '../../CommentBox/CommentItem';

import Cover from '../../Cover/Cover';

import withStyles from '../../../decorators/withStyles';
import styles from './SourceComment.scss';

@withStyles(styles)
class SourceComment extends React.Component {

	render() {
		const { onModifyCover, actions, data } = this.props;
		return (
			<div className="SourceComment main-wrap">
				<CommonHeader>
					<ReturnButton/>
				</CommonHeader>
				<CommentBox data={ data } actions={ actions } url="1">
					<CommentCommonHeader title="精彩内容" count={ data.length }/>
					<CommentList comments={ data } actions={actions} Item={CommentItem} />
	        {
	          this.props.cover && 
	          <Cover modifyCover={ onModifyCover }>
	            <CommentForm actions={ actions } modifyCoverFunc={ onModifyCover } id= { data.length }/>
	          </Cover>
	        }
	        <CommentWriteGuide func={ onModifyCover } count={data.length}/>
				</CommentBox>
			</div>
		);
	}
}

function mapStateToProps(state) {
  return {
    cover: state.cover,
    data: state.comment,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onModifyCover: bindActionCreators(modifyCover, dispatch),
    actions: bindActionCreators(CommentActions, dispatch)
  };
}

SourceComment = connect(
  mapStateToProps,
  mapDispatchToProps
)(SourceComment)

export default SourceComment;