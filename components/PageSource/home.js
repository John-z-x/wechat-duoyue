import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Cart from '../CartUIComponent/Cart';
import Slider from '../SliderUIComponent/Slider';

import SourceSearch from './SourceSearch';
import Tab from '../TabUIComponent/Tab';
import SourceBox from './SourceBox';

import * as sourceActions from '../../actions/SourceActions';

import withStyle from '../../decorators/withStyles';
import styles from './SourcePage.scss';


let sourceData = {
	SliderList: [
		{"id": "1", "url": "/images/fourth.jpg", "title": "长江出版社"},
	]
}

let TabItemsData = {
  content: [
    "全部", "视频", "音频", "PDF", "相册"
  ],
  tabClass: {
    tabBox: "source-calssify clearfix",
    tabItemOn: "source-type-over",
    tabItemDefault: "source-type"
  }
}

@withStyle(styles)
class SourcePageHome extends React.Component {

  componentDidMount() {
    this.props.actions.LazyLoad();
  }

  onTypeChange(index) {
    let filterSourceType = this.props.actions.FilterSourceType;
    filterSourceType && filterSourceType(index)
  }

	render() {
    const { list, actions } = this.props;
		return (
      <div className="SourcePageHome">
				<Slider data={sourceData.SliderList}/>
				<SourceSearch/>
        <Tab TabItemsData={TabItemsData} onTypeChange={this.onTypeChange.bind(this)}/>
        <SourceBox LazyLoad={actions.LazyLoad} list={list}/>
				<Cart />
        { this.props.children }
      </div>
		);
	}
}

function mapStateToProps(state) {
  return {
    list: state.source
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sourceActions, dispatch)
  };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SourcePageHome);
//export default SourcePage;