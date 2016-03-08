import React, { Component } from 'react';

const navs = [
	{"title": "尖货", "imgUrl": "http://file.duoyue.me/upload/producttype/20151217/2015_12_17_152044543.png"},
	{"title": "学堂", "imgUrl": "http://file.duoyue.me/upload/producttype/20151217/2015_12_17_152124594.png"},
	{"title": "文品", "imgUrl": "http://file.duoyue.me/upload/producttype/20151217/2015_12_17_152131944.png"},
	{"title": "玩意", "imgUrl": "http://file.duoyue.me/upload/producttype/20151217/2015_12_17_152143375.png"}
]

class Nav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			navs: [],
		}
	}

	componentDidMount() {
		this.setState({
			navs: navs
		});
	}

  render() {
  	const navsData = this.state.navs;
    let navsCode = navsData.map( (item, i) => 
  		<div className="nav-item left" key={i}>
        <img src={item.imgUrl} alt={item.title} width="60%"/>
        <span className="category-name">{item.title}</span>
  		</div>
    );
  	return (
      <nav className="nav clearfix">
      	{navsCode}
      </nav>
  	);
  }
}

export default Nav;