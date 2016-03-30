import React from 'react';
import IntegrationTitle from './IntegrationTitle';

const exchangeRecordData = [
	{"id": "1","illustration": "兑换成功", "integration": "200","time": "2016-3-18"},
	{"id": "2","illustration": "兑换成功", "integration": "200","time": "2016-3-18"},
	{"id": "3","illustration": "兑换成功", "integration": "200","time": "2016-3-18"},
	{"id": "4","illustration": "兑换成功", "integration": "200","time": "2016-3-18"},
	{"id": "5","illustration": "兑换成功", "integration": "200","time": "2016-3-18"},
	{"id": "6","illustration": "兑换成功", "integration": "200","time": "2016-3-18"}
]

class IntegrationConsumeList extends React.Component{
	render(){
		let exchangeItems = exchangeRecordData.map((exchangeItem) => {
			return (<div className="integration-record-list" key={exchangeItem.id}><span>{exchangeItem.illustration}</span><span>{exchangeItem.integration}</span><span>{exchangeItem.time}</span></div>);
		});
		return (
				<div className="IntegrationConsumeList">
					<IntegrationTitle>积分兑换记录</IntegrationTitle>
					<div className="record-container">
						<div className="record-title">积分兑换记录</div>
						<div className="integration-record-list record-first-row"><span>说明</span><span>积分</span><span>时间</span></div>
						{exchangeItems}
					</div>
				</div>
		);
	}
};
export default IntegrationConsumeList;