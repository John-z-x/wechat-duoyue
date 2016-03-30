import React from 'react';

class ShowCart extends React.Component {
  modifyCover() {
    let modifyCover = this.props.modifyCover;
    modifyCover();
  }

	render() {
		const { data, modifyCover} = this.props;
		let num = 0 ; 
	  data.map( item => {
      num += parseInt(item.num, 10);
	  });
		if (num > 0) {
			return (
				<div className="shopping-cart" onClick={this.modifyCover.bind(this)}>
					<div className="goods-num">{num}</div>
				</div>
			);
		}else {
			return null;
		}
	}
}

export default ShowCart;