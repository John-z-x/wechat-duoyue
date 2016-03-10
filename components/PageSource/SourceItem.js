import React from 'react';

class SourceItem extends React.Component {
	render() {
		let data = this.props.data;
		return (
			<div className="item">
			      <a  className="source-box">
				      <div className="source-img-box" >
					      <img src={data.type_pic} className="source-img" alt="pdf"/> 
					    </div>
					    <div>
					      <img width="100%" src={data.pic} alt="source-img" />
					    </div>
					    <div className="source-name">{data.name}</div>
					    <div className="source-desc">{data.desc}</div>
					    <div className="source-count clearfix">
					      <img src="../images/num.png" alt="num" className="source-count-img1"/>
					      <div className="source-count-font">数量<span>{data.count}</span></div>
					      <img src="../images/look.png" alt="look-num" className="source-count-img2"/>
					      <div className="source-count-font">浏览<span>{data.penSize}</span></div>
				      </div>
			      </a>
			    </div>
		);
	}
}

export default SourceItem;