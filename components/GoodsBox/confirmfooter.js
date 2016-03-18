import React from 'react';
import { Link } from 'react-router';

class ConfirmFooter extends React.Component {
	render() {
    let money = 0, num = 0, data = this.props.data;
    data.map( item => {
      money += parseInt(item.num, 10)*parseInt(item.price, 10);
      num += parseInt(item.num);
    })
		return (
			<div className="confirm-footer clearfix">
				<div className="confirm-footer-left fontFZ left">
					<div className="total">
						<span>合计： ￥</span>
						<span>{money}</span>
					</div>
					<div className="carriage">5.00</div>
				</div>
				<Link to="/confirmorder" className="confirm-footer-right right" >
					<span>去结算(</span>
					  <span className="confirm-num">{num}</span>
					<span>)</span>
				</Link>
			</div>
		);
	}
}

export default ConfirmFooter;