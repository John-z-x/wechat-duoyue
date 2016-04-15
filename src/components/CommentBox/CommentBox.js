'use strict';
import React, { PropTypes }from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { modifyCover } from '../../actions/ShoppingCartActions';
import * as CommentActions from '../../actions/CommentActions';

import CommentList from './CommentList.js';
import CommentForm from './CommentForm.js';
import CommentCommonHeader from './CommentCommonHeader';
import CommentWriteGuide from './CommentWriteGuide';
import CommentItem from './CommentItem';

import Cover from '../Cover/Cover';

////import withstyles from '../../decorators/withStyles';
import styles from './CommentBox.scss';


//@withStyles(styles)
class CommentBox extends React.Component {
	constructor(props) {
		super(props);
	}

  componentDidMount() {
    //console.log(this.props.url)
    this.props.actions.fetchComment(this.props.url);
  }
	render() {
		return (
			<div className="CommentBox">
        { this.props.children }
			</div>
		);
	}
}

CommentBox.propTypes = {

}
export default CommentBox;





