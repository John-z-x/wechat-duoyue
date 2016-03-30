import React from 'react';

class SourceBuyDescription extends React.Component {
 render() {
 	let data = this.props.data;
 	return(
 		<div className="SourceBuyDescription">
 			<img src={data.src} alt="source-image" width="100%"/>
 			<div className="source-buy-title">{data.title}</div>
 			<div className="source-buy-description">{data.des}</div>
 			<div className="source-buy-point">当前资源需要购买后浏览...</div>
 		</div>
 	);
 }
} 

export default SourceBuyDescription;