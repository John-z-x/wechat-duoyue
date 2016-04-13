'use strict';
import React from 'react';
import classnames from 'classnames';

class Cover extends React.Component {
	render() {
    return (
			<div className="Cover cover" onClick={this.props.modifyCover}>
				{this.props.children}
			</div>
    );
	}
}

export default Cover;