import React from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './ReturnButton.css';

@withStyles(styles)
class ReturnButton extends React.Component{
		handle(){
				window.history.back();
			};
		render(){
			return (
					<div className="ReturnButton topbox">
						<div className="back-check" onClick={this.handle} >
							<img src={'../images/back.png'} />
						</div>
					</div>
				);
		}
	};
export default ReturnButton;