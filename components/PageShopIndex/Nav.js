import React, { Component } from 'react';
import  { Link } from 'react-router';

const navs = [
	{"href": "/shop/goodlist/1", "title": "尖货", "imgUrl": "http://file.duoyue.me/upload/producttype/20151217/2015_12_17_152044543.png"},
	{"href": "/shop/goodlist/2", "title": "学堂", "imgUrl": "http://file.duoyue.me/upload/producttype/20151217/2015_12_17_152124594.png"},
	{"href": "/shop/goodlist/3", "title": "文品", "imgUrl": "http://file.duoyue.me/upload/producttype/20151217/2015_12_17_152131944.png"},
	{"href": "/shop/goodlist/4", "title": "玩意", "imgUrl": "http://file.duoyue.me/upload/producttype/20151217/2015_12_17_152143375.png"}
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
				<Link to={item.href}>
        <img src={item.imgUrl} alt={item.title} width="60%"/>
        <span className="category-name">{item.title}</span>
				</Link>
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