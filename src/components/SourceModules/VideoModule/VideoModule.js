'use strict';
import React from 'react';
import { Link } from 'react-router';
import withStyles from '../../../decorators/withStyles';
import styles from './VideoModule.scss';

@withStyles(styles)
class VideoModule extends React.Component {
	render() {
		return (
			<div className="VideoModule">
				{this.props.children}
			</div>
		);
	}
}


export default VideoModule;