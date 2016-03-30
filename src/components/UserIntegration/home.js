import React from 'react';
import IntegrationTitle from './IntegrationTitle';
import { Link } from 'react-router';

class UserIntegrationHome extends React.Component{
	render(){
		return (
			<div className="UserIntegrationHome">
				<IntegrationTitle>我的积分</IntegrationTitle>
				<div className="now-integration-container">
					<div className="now-integration-title">当前积分</div>
					<div className="now-integration">0</div>
				</div>
				<div className="integration-info">
					<Link to='/userintegration/used' className="used-integration-container">
						<div className="info-top-title">已使用</div>
						<div className="info-bottom-content">0</div>
					</Link>
					<Link to='/userintegration/total' className="total-integration-container">
						<div className="info-top-title">累计积分</div>
						<div className="info-bottom-content">0</div>
					</Link>
				</div>
			</div>
		);
	}
};
export default UserIntegrationHome;