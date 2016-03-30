import React from 'react';
import IntegrationTitle from './IntegrationTitle';

const totalIntegrationData = [
	{"id": "1","illustration": "抽奖", "integration": "200","time": "2016-3-18"},
	{"id": "2","illustration": "抽奖", "integration": "200","time": "2016-3-18"},
	{"id": "3","illustration": "抽奖", "integration": "200","time": "2016-3-18"},
	{"id": "4","illustration": "抽奖", "integration": "200","time": "2016-3-18"},
	{"id": "5","illustration": "抽奖", "integration": "200","time": "2016-3-18"},
	{"id": "6","illustration": "抽奖", "integration": "200","time": "2016-3-18"}
]

class TotalIntegrationList extends React.Component{
	render(){
		let totalIntegrationItems = totalIntegrationData.map((totalIntegrationItem) => {
			return (
					<div className="total-integration-item" key={totalIntegrationItem.id}>
						<div className="item-top-info clearfix"><span>{totalIntegrationItem.integration}</span><span>{totalIntegrationItem.time}</span></div>
						<div className="item-bottom-info">{totalIntegrationItem.illustration}</div>
					</div>
			);
		});
		return (
				<div className="TotalIntegrationList">
					<IntegrationTitle>积分记录</IntegrationTitle>
					<div className="total-integration-wrap">
						{totalIntegrationItems}
					</div>
				</div>
		);
	}
};
export default TotalIntegrationList;