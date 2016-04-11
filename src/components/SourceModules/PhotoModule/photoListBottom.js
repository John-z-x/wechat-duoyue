import React from 'react';

class PhotoListBottom extends React.Component {
	render() {
		let src = require("../../../../assets/images/photoGallery/logo.png");
		return(
			<div className="PhotoListBottom" >
				<div className="bottom-logo" id="bottom_logo"  >
	          <center>
	            <div className="loadend" >
	              已经加载到底了哟
	            </div>
	          </center>
	          <div className="logo-area">
	            <div className="logo-pic left">
	              <img src={src} height="50px" width="50px" alt="武汉理工数字中心" title="武汉理工数字中心"/>
	            </div>
	            <div className="logo-text left">
	              <div className="logo-text-up">武汉理工数字中心</div>
	              <div className="logo-text-down" >每天多学一点点</div>
	            </div>
	            <button className="logo-button right">前往首页</button>
	          </div>
	      </div>
      </div>
		);
	}
}

export default PhotoListBottom;