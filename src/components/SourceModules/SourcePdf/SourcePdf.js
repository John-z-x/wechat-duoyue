'use strict';
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import withStyles from '../../../decorators/withStyles';
import CommonHeader from '../../HeaderComponents/CommonHeader.js';
import ReturnButton from '../../HeaderComponents/ReturnButton';
import CommentButton from '../../HeaderComponents/CommentButton';
import MenuButton from '../../HeaderComponents/MenuButton';

import styles from './SourcePdf.scss';

@withStyles(styles)
class SourcePdf extends React.Component {

	render() {
		return (
			<div className="SourcePdf" id="SourcePdf">
				{this.props.children}			
			</div>
		);
	}
}

export default SourcePdf;