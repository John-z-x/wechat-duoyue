import React from 'react';
import GoodsItem from './GoodsItem';
import Confirm from '../CommonPopUpLayer/Confirm';
import GoodsNumModify from './GoodsNumModify';

class GoodsList extends React.Component {

  constructor(props) {
    super(props);
  }

  confirmAction(index) {

  }

	render() {
		const { data, actions } = this.props;
		let itemNodes = data.map( (item) => {
				return (
					<GoodsItem data={item}  actions={actions} id={item.id} key={item.id}>
            <GoodsNumModify num={item.num} id={item.id} ModifyNum={actions.ModifyNum}/>
          </GoodsItem>
				);
		})
		if( data.length < 1 ) {
			itemNodes.push(<li className="nullBox" key="nullBox">您的购物车已经空了</li>)
		}
		return (
			<ul className="cart-goods" >
				{itemNodes}
        <Confirm ConfirmAction={this.confirmAction.bind(this)}/>
			</ul>
		);
	}
}

export default GoodsList;