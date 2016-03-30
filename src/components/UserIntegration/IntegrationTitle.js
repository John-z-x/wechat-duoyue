import React from 'react';

class IntegrationTitle extends React.Component{
	render(){
		return (
			<div className="IntegrationTitle">
				<div className="title">{this.props.children}</div>
			</div>
		);
	}
};
export default IntegrationTitle;