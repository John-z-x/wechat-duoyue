import React, { PropTypes} from 'react';

class DanpinPage extends React.Component {
	static propTypes = {
		children: PropTypes.any
	};

	render() {
		return (
      <div className="DanpinPage">
				{this.props.children}
      </div>
		);
	}
}

export default DanpinPage;