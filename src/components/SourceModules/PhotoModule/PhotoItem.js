import React from 'react';
import { Link } from 'react-router';
class PhotoItem extends React.Component {
	render() {
		let data = this.props.data;
		let photoTitle = !!data.title ? <div className="photo-title">{data.title}</div> : <div></div>;
		return(
			<div className = "PhotoItem">
				<Link to={"/source/photo/2/albumshow" + "/" + data.index}>
          <img src={data.src} className="photo-image" alt="photo-image"/>
					{
						photoTitle
					}
        </Link>
		  </div>
		);
	}
}

export default PhotoItem;