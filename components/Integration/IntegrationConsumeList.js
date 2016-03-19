import React from 'react';
import ReturnButton from '../HeaderComponents/ReturnButton';
import CommonHeader from '../HeaderComponents/CommonHeader';
import IntegrationTitle from './IntegrationTitle';

class IntegrationConsumeList extends React.Component{
	render(){
		return (
			<div className="IntegrationConsumeList">
				<CommonHeader>
					<ReturnButton />
				</CommonHeader>
				<IntegrationTitle>积分兑换记录</IntegrationTitle>
				<div className="record-container">
					<div className="record-title">积分兑换记录</div>
					<table className="integration-record-list">
						<tbody>
							<tr><td>说明</td><td>积分</td><td>时间</td></tr>
							<tr><td>兑换成功</td><td>200</td><td>2016-3-18</td></tr>
							<tr><td>兑换成功</td><td>200</td><td>2016-3-18</td></tr>
							<tr><td>兑换成功</td><td>200</td><td>2016-3-18</td></tr>
							<tr><td>兑换成功</td><td>200</td><td>2016-3-18</td></tr>
							<tr><td>兑换成功</td><td>200</td><td>2016-3-18</td></tr>
							<tr><td>兑换成功</td><td>200</td><td>2016-3-18</td></tr>
						</tbody>
					</table>
				</div>
			</div>
		);
	}
};
export default IntegrationConsumeList;