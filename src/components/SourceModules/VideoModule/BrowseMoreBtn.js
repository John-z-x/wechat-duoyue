'use strict';
import React from 'react';
import { Link } from 'react-router';

class BrowseMoreBtn extends React.Component {

	render() {
		return (
      <Link to="/source" className="BrowseMoreBtn">
        <span className="text">查看更多精彩栏目</span>
      </Link>
		);
	}
}

export default BrowseMoreBtn;