import React from 'react';
import GoodsItem from './GoodsItem';
import GoodsNumModify from './GoodsNumModify';

class GoodsList extends React.Component {
	render() {
		const { data, actions } = this.props;
		let itemNodes = data.map( (item, index) => {
				return (
					<GoodsItem data={item}  showConfirm={actions.showConfirm} key={index}>
            <GoodsNumModify num={item.num} id={item.id} modifyGoodsNum={actions.modifyGoodsNum}/>
          </GoodsItem>
				);
		})
		if( data.length < 1 ) {
			itemNodes.push(<li className="nullBox" key="nullBox">您的购物车已经空了</li>)
		}
		return (
			<ul className="cart-goods" >
          {itemNodes}
			</ul>
		);
	}
}

export default GoodsList;