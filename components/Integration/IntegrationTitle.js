import React from 'react';
import { Link } from 'react-router';
import withStyles from '../../decorators/withStyles';
import styles from './Integration.scss';

@withStyles(styles)
class IntegrationTitle extends React.Component{
	render(){
		return (
			<div className="IntegrationTitle">
				<div className="title">{this.props.children}</div>
			</div>
		);
	}
};
export default IntegrationTitle;