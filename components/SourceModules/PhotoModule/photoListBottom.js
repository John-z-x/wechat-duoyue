import React from 'react';

class PhotoListBottom extends React.Component {
	render() {
		return(
			<div className="PhotoListBottom" >
				<div className="bottom-logo" id="bottom_logo"  >
	          <center>
	            <div className="loadend" >
	              已经加载到底了哟
	            </div>
	          </center>
	          <hr  className="hr" />
	          <div>
	            <div className="logo-pic">
	              <img   src="/images/photoGallery/logo.png"  height="50px" width="50px" alt="武汉理工数字中心"/>
	            </div>
	            <div className="logo-text">
	              <div className="logo-text-up">武汉理工数字中心</div>
	              <div className="logo-text-down" >每天多学一点点</div>
	            </div>
	            <button onclick="" className="logo-button">前往首页</button>
	          </div>
	      </div>
      </div>
		);
	}
}

export default PhotoListBottom;