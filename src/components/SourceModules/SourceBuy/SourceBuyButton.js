import React from 'react';

class SourceBuyButton extends React.Component {
 render() {
 	console.log(this.props.data)
 	return(
 		<div className="SourceBuyButton">
 			<a href="">
 				<div className="buy-button">立即购买 ( ￥{this.props.data} )</div>
 			</a>
 		</div>
 	);
 }
} 

export default SourceBuyButton;