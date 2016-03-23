import React from 'react';

class PhotoItem extends React.Component {
	render() {
		let data = this.props.data;
		let photoTitle = !!data.title ? <div className="photo-title">{data.title}</div> : <div></div>;
		return(
			<div className = "PhotoItem">
					<img src={data.src} className="photo-image" alt="photo-image"/>
					{
						photoTitle
					}
		  </div>
		);
	}
}

export default PhotoItem;