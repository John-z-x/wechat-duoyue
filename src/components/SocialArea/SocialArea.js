import React from 'react';

import CommonHeader from '../HeaderComponents/CommonHeader';
import ReturnButton from '../HeaderComponents/ReturnButton';

class SocialArea extends React.Component {

	render() {
		return (
				<div className="SocialArea">
					<CommonHeader>
						<ReturnButton />
					</CommonHeader>
					{this.props.children}
				</div>
		)
	}
}
export default SocialArea;