import React from 'react';
import  GalleryFrontCover from './GalleryFrontCover';


import withStyles from '../../../decorators/withStyles';
import styles from './PhotoModule.scss';


@withStyles(styles)
class PhotoModule extends React.Component { 
	render() {
		return(
			<div className="PhotoModule">
				{this.props.children}
			</div>
		);
	}
}

export default PhotoModule;