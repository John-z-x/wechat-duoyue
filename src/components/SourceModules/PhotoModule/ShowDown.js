import React from 'react';

class ShowDown extends React.Component {
   render() {
		return(
			<div className="ShowDown" >
			  <div className="mask"></div>
			  <div className="show-down-box">
			  	<div className="show-message">长按图片保存到本机</div>
			  	<div className="i-know" onClick={this.props.toShowDown}>我知道了</div>
			  </div>
			</div>
		);
	}
}

export default ShowDown;