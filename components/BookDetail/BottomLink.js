import React from 'react';

class BottomLink extends React.Component {
	render() {
		return (
			<div className="bottom-link">
				<div className="bottom-link-box">
					<div className="bottom-link-title">{this.props.title}</div>
					<div className="bottom-link-icon"></div>
				</div>
			</div>
		);
	}
}

export default BottomLink;