'use strict';
import React from 'react';

class BrowseMoreBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
	render() {
		return (
      <a href={this.props.data.href} className="browse-more-btn">
        <span className="text">查看更多精彩栏目</span>
      </a>
		);
	}
}

export default BrowseMoreBtn;