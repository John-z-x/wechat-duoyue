import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Cart from '../components/CartUIComponent/Cart';
import Slider from '../components/SliderUIComponent/Slider';

import SourceSearch from '../components/PageSource/SourceSearch';
import Tab from '../components/TabUIComponent/Tab';
import SourceBox from '../components/PageSource/SourceBox';

import * as sourceActions from '../actions/SourceActions';

import withStyle from '../decorators/withStyles';
import styles from '../components/PageSource/SourcePage.scss';


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
class SourcePage extends React.Component {

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
      <div className="SourcePage">
				<Slider data={sourceData.SliderList}/>
				<SourceSearch/>
        <Tab TabItemsData={TabItemsData} onTypeChange={this.onTypeChange.bind(this)}/>
        <SourceBox LazyLoad={actions.LazyLoad} list={list}/>
				<Cart />
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
)(SourcePage);
//export default SourcePage;