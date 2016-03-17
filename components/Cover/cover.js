'use strict';
import React from 'react';
import classnames from 'classnames';

class Cover extends React.Component {
	render() {
		const display = this.props.cover ? "show" : "hide";
		let coverClassName = classnames('cover', display );
    return (
			<div className={coverClassName} onClick={this.props.ModifyCover}>
				{this.props.children}
			</div>
    );
	}
}

export default Cover;