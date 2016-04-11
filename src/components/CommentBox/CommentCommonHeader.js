'use strict'
import React, { PropTypes }  from 'react';
import classNames from 'classnames';

class CommentCommonHeader extends React.Component {
	render() {
		const { title, count } = this.props;
		let amountCode = (count || count == 0) && <span className="amount"> { count } 条</span>;
		return (
			<div className="CommentCommonHeader">
				<h4 className={classNames('clearfix',{'no-amount': !count && count !== 0})}>
					<span className="title">{title}</span>
					{amountCode}
				</h4>
			</div>
		);
	}
}

CommentCommonHeader.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number,
}

export default CommentCommonHeader;