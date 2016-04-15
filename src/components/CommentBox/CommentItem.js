'use strict'
import React, { PropTypes }  from 'react';
import classNames from 'classnames';

class CommentItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			avatarState: true
		};
	}

	showSelf() {
		this.setState({
			avatarState: true,
		});
	}
	toPraise() {
		this.props.actions.togglePraise(this.props.id);
	}
	render() {
		const { id, nickName, praise, praiseNum, text, time, userAvatar, actions, images } = this.props;
		let imageNodes = null;
		if (images) {
		imageNodes =	images.map((item, i) => {
				return (
					<img className="comment-img" key={i} src={item} alt="comment-img"/>
				)
			});
		}
		return (
			<div className="CommentItem">
				<div className="info-wrap clearfix">
					<div className="user-avatar left">
						<img className={classNames('one',{'avatar': this.state.avatarState})} src={userAvatar} alt="userAvatar" onLoad={::this.showSelf }/>
					</div>
					<div className="user-info left">
						<h4 className="user-name a-line ">{nickName}</h4>
						<time className="comment-time a-line">{time}</time>
					</div>
					{
						(typeof praiseNum == "number") &&
						<div className="like right clearfix" onClick={ ::this.toPraise }>
							<em className={classNames('like-icon',{'on': praise})}></em>
							<span className="like-num right">{praiseNum}</span>
						</div>
					}
				</div>
				<p className="text">{text}</p>
				{
					imageNodes
				}
			</div>
		);
	}
}

CommentItem.propTypes = {
  praise: PropTypes.bool,
  praiseNum: PropTypes.number,
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  userAvatar: PropTypes.string.isRequired,
  nickName: PropTypes.string.isRequired,
  actions: PropTypes.object
}

export default CommentItem;
