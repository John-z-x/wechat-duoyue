import React from 'react';
import ReturnButton from '../HeaderComponents/ReturnButton';
import CommonHeader from '../HeaderComponents/CommonHeader';
import withStyles from '../../decorators/withStyles';
import styles from './UserIntegration.scss';

@withStyles(styles)
class UserIntegration extends React.Component{
	render(){
		return (
			<div className="UserIntegration">
				<CommonHeader>
					<ReturnButton />
				</CommonHeader>
				{ this.props.children }
			</div>
		);
	}
};
export default UserIntegration;