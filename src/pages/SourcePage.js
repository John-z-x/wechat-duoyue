import React from 'react';

class SourcePage extends React.Component {

	render() {
		return (
      <div className="SourcePage">
      { this.props.children }
      </div>
		);
	}
}

export default SourcePage;