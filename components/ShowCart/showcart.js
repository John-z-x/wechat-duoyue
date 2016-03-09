import React from 'react';

class ShowCart extends React.Component {
  ModifyCover() {
    let ModifyCover = this.props.ModifyCover;
    ModifyCover();
  }

	render() {
		const { data, ModifyCover} = this.props;
		let num = 0 ; 
	  data.map( item => {
      num += parseInt(item.num, 10);
	  });
		if (num > 0) {
			return (
				<div className="shopping-cart" onClick={this.ModifyCover.bind(this)}>
					<div className="goods-num">{num}</div>
				</div>
			);
		}else {
			return null;
		}
	}
}

export default ShowCart;