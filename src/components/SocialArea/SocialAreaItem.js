import React from 'react';
import { Link } from 'react-router';

class SocialAreaItem extends React.Component {
 	render() {
		let data = this.props.data;
		return (
			<div className="SocialAreaItem">
				<Link to={`/socialarea/${data.id}/display`}>
					<div className="title">
						{data.title}
					</div>
					<div className="intra">
						{data.intra}
					</div>
					<div className="topic-pic-container">
						<img className="bg-pic" src={data.bgPic} alt="话题图" title="话题图"/>
					</div>
					<div className="user">
						<div className="user-pic">
							<img alt="头像" src={data.userPic} title="头像"/>
						</div>
						<div className="user-words">
							<span>“</span>
							{data.words}
							<span>”</span>
						</div>
						<div className="user-time">
							{data.time}
						</div>
					</div>
				</Link>
				<div className="end"></div>
			</div>
		);
  }
}

export default SocialAreaItem;