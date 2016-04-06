import React from 'react';
import RecItem from './RecItem';

class RecList extends React.Component {
	render() {
		var classname = this.props.classname || "rec-title" ;
		return (
			<div className="RecList">
				<div className={classname}>{this.props.title}</div>
				<div>
					{
						this.props.data.map((ele, i) => {
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