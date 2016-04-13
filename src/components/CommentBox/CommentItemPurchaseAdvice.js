'use strict'
import React, { PropTypes }  from 'react';
import classNames from 'classnames';

class CommentItemPurchaseAdvice extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { id, text } = this.props;
		return (
			<div className="CommentItemPurchaseAdvice">
				<div className="question-wrap clearfix">
					<div className="question-avatar left">
						<em className="avatar">Q</em>
					</div>
					<p className="text left">{text}</p>
				</div>
			</div>
		);
	}
}

CommentItemPurchaseAdvice.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
}

export default CommentItemPurchaseAdvice;