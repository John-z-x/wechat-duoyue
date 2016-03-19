import React from 'react';
import ReturnButton from '../HeaderComponents/ReturnButton';
import CommonHeader from '../HeaderComponents/CommonHeader';
import IntegrationTitle from './IntegrationTitle';

class UserIntegration extends React.Component{
	render(){
		return (
			<div className="UserIntegration">
				<CommonHeader>
					<ReturnButton />
				</CommonHeader>
				<IntegrationTitle>我的积分</IntegrationTitle>
				<div className="now-integration-container">
					<div className="now-integration-title">当前积分</div>
					<div className="now-integration">0</div>
				</div>
				<div className="integration-info">
					<div className="used-integration-container">
						<div className="info-top-title">已使用</div>
						<div className="info-bottom-content">0</div>
					</div>
					<div className="total-integration-container">
						<div className="info-top-title">累计积分</div>
						<div className="info-bottom-content">0</div>
					</div>
				</div>
			</div>
		);
	}
};
export default UserIntegration;