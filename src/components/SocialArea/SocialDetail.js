import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { modifyCover } from '../../actions/ShoppingCartActions';
import * as CommentActions from '../../actions/CommentActions';

import CommonHeader from '../HeaderComponents/CommonHeader.js';
import ReturnButton from '../HeaderComponents/ReturnButton';
import CommentButton from '../HeaderComponents/CommentButton';

import CommentBox from '../CommentBox/CommentBox';
import CommentList from '../CommentBox/CommentList.js';
import CommentForm from '../CommentBox/CommentForm.js';
import CommentWriteGuide from '../CommentBox/CommentWriteGuide';
import CommentItem from '../CommentBox/CommentItem';

import Cover from '../Cover/Cover';

////import withstyles from '../../decorators/withStyles';
import styles from './SocialDetail.scss';

const dataArray = {
	title: '你觉得你什么时候最帅',
	intra: '足球已经越来越位人痴迷，足球场的设计也越来越美观，你喜欢哪种足球体育场呢？'
};

//@withStyles(styles)
class SocialDetail extends React.Component {
	render() {
		const { actions, data, onModifyCover } = this.props;
		return (
				<div className="SocialDetail" >
					<CommonHeader>
						<ReturnButton/>
						<CommentButton OnCommentClick={ onModifyCover }/>
					</CommonHeader>
					<div id="banner-pic" className="detail-pic-container">
			      <img src="http://file.duoyue.me/upload/group/logo/20151126/2015_11_26_160438732.jpg" alt="logo" title="logo"/>
			    </div>
			    <div className="banner-content" >
		        <div className="banner-content-title">{dataArray.title}</div>
		        <div className="banner-content-intra">{dataArray.intra}</div>
			    </div>	
				  <CommentBox data={ data } actions={ actions } url="3">
						<CommentList comments={ data } actions={actions} Item={CommentItem} />
		        {
		          this.props.cover && 
		          <Cover modifyCover={ onModifyCover }>
		            <CommentForm actions={ actions } id= { data.length }/>
		          </Cover>
		        }
					</CommentBox>
				</div>
			);
	}
}

function mapStateToProps(state) {
	console.log(state)
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

SocialDetail = connect(
  mapStateToProps,
  mapDispatchToProps
)(SocialDetail)

export default SocialDetail;