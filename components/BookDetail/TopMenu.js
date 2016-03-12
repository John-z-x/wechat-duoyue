import React from 'react';

class TopMenu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isFavorClassname: "/images/like_new.png"
		}
	}
	handleClick (event){
		this.setState({
      isFavorClassname: this.state.isFavorClassname == "images/like_new.png" ? "images/like_yes_new.png" : "images/like_new.png"
		})
	}
	render() {
		return (
			<div>
				<div className="top-menu">
					<div className="back-btn" >
						<img src="/images/back_check.png" alt="返回按钮" />
					</div>
					<div className="top-fav" onClick={this.handleClick.bind(this)}>
						<img ref="fav" src={this.state.isFavorClassname} alt="收藏按钮" />
					</div>
				</div>
				<div className="blank40"></div>
			</div>
		);
	}
};

export default TopMenu;