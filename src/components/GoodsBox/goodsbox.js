import React from 'react';
import ConfirmTop from './ConfirmTop';
import GoodsList from './GoodsList';
import Confirm from '../Modals/Confirm';
import ConfirmFooter from './ConfirmFooter';
import Modal from '../Modals/Modal';

class GoodsBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalDisplay: false
    }
    this.confirmResult = this.confirmResult.bind(this);
  }

  confirmResult(result) {
    this.setState({
      modalDisplay: false
    })
    result && this.props.actions.deleteGoodsItem(this.id);
  }

  showConfirm(id) {
    this.setState({
      modalDisplay: true
    });
    this.id = id;
  }

	render() {
		const { data, actions, modifyCover } = this.props;
    actions.showConfirm = this.showConfirm.bind(this);
		return (
			<div className="GoodsBox shopping-goods">
				<ConfirmTop modifyCover={modifyCover} loadData={actions.loadData}/>
				<GoodsList data={data} actions={actions} />
				<ConfirmFooter data={data} />
      {
        this.state.modalDisplay &&
        <Modal>
          <Confirm confirmResult={this.confirmResult} content="确认删除?"/>
        </Modal>
      }
			</div>
		);
	}
}

export default GoodsBox;