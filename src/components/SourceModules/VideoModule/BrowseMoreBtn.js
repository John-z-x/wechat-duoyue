'use strict';
import React from 'react';
import { Link } from 'react-router';

class BrowseMoreBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
	render() {
		return (
      <Link to="/source/video/4/videolist" className="browse-more-btn">
        <span className="text">查看更多精彩栏目</span>
      </Link>
		);
	}
}

export default BrowseMoreBtn;