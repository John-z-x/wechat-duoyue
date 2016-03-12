import React from 'react';
import RecItem from './RecItem';

class RecList extends React.Component {
	render() {
		var classname = this.props.classname ? this.props.classname : "rec-title" ;
		return (
			<div className="rec-list">
				<div className={classname}>{this.props.title}</div>
				<div>
					{
						this.props.data.map(function(ele, i) {
							return (
								<RecItem data={ele} key={i}/>
							);
						})
					}
				</div>	
			</div>
		);
	}
}

export default RecList;