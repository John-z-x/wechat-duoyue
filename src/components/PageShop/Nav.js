import React, { Component, PropTypes } from 'react';
import  { Link } from 'react-router';

class Nav extends Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}

	componentDidMount() {

	}

  render() {
  	const { data } = this.props;
    let navsCode = data.map((item, i) =>
  		<div className="nav-item left" key={i}>
				<Link to={`/shop/goodslist/${item.id}`}>
          <div className="nav-img-wrapper">
            <div className="nav-img-container">
              <img src={item.typeIcon} alt={item.typeName} title={item.typeName} width="60%"/>
            </div>
          </div>
          <span className="category-name">{item.typeName}</span>
				</Link>
  		</div>
    );
  	return (
      <nav className="Nav nav clearfix">
      	{navsCode}
      </nav>
  	);
  }
}

Nav.propTypes = {
	data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    typeName: PropTypes.string.isRequired,
    typeIcon: PropTypes.string.isRequired,
  }).isRequired).isRequired,
}

export default Nav;
