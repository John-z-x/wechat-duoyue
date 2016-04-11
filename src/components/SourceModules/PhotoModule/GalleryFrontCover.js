import React from 'react';
import { findDOMNode } from 'react-dom';

class GalleryFrontCover extends React.Component {
	
	componentDidMount() {
		let allHeight = document.body.offsetHeight, CONTENT_HEIGHT_PERCENT = 0.83,
		    contentHeight = 0.83*allHeight;
				findDOMNode(this.refs.content).style.height = contentHeight + "px";
	}

	render() {
		let { data } = this.props;
		return(
			<div className="GalleryFrontCover">
				<div className="content" ref="content">
					<div className="cover-pic">
						<center className="picture-show" style={{backgroundImage:'url('+data.src+')'}} >
						</center>
					</div>
					<div className="cover-title">
					  {data.title}
					</div>
					<div className="cover-describe">
						{data.describe}
					</div>
					<div className="cover-page-num">
						<span className="decoration-image"/>
						<span className="num">共{data.pageNum}张图片</span>
						<span className="decoration-image"/>
					</div>
				</div>
			</div>
		);
	}
}
export default GalleryFrontCover;