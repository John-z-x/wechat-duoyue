import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Slider from '../UIComponent/Slider/Slider';
import SourceSearch from './SourceSearch';
import Tab from '../UIComponent/Tab/Tab';
import SourceBox from './SourceBox';

import * as sourceActions from '../../actions/SourceActions';
import * as slideActions from '../../actions/SlideActions';

import withStyle from '../../decorators/withStyles';
import styles from './SourcePage.scss';


let TabItemsData = {
  content: [
    "全部", "视频", "音频", "PDF", "相册"
  ],
  tabClass: {
    tabBox: "source-classify clearfix",
    tabItemOn: "source-type-over left",
    tabItemDefault: "source-type left"
  }
}

@withStyle(styles)
class SourcePageHome extends React.Component {

  constructor(props) {
    super(props);
    this.type = -1; //记录当前资源类型
    this.changed = true; //判断是否资源类型发生变化
    this.state = {
      sourceBox: true
    }
  }

  componentDidMount() {
    this.props.slideActions.slideDataLoad("sourceSlide");
  }

  onTypeChange(index) {
    let filterSourceType;
    if(this.type == index) {
      this.changed = false;
      return;
    } else {
      this.type = index;
      this.changed = true;
    }
    filterSourceType = this.props.actions.filterSourceType;
    filterSourceType && filterSourceType(index)
  }

  componentWillReceiveProps(nextProps) {
    if(!this.changed) return;
    this.changed = false;
    this.setState({
      sourceBox: null
    }, () => {
      this.setState({
        sourceBox: true
      });
    });
  }

	render() {
    const { list, actions, slideData} = this.props;
		return (
      <div className="SourcePageHome">
				<Slider data={slideData}/>
				<SourceSearch/>
        <Tab TabItemsData={TabItemsData} onTypeChange={this.onTypeChange.bind(this)}/>
        {
          this.state.sourceBox ?
            <SourceBox sourceLazyLoad={actions.sourceLazyLoad} list={list} typeIndex={this.type}/>
            :
            null
        }
      </div>
		);
	}
}

function mapStateToProps(state) {
  return {
    list: state.source,
    slideData: state.slide
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sourceActions, dispatch),
    slideActions: bindActionCreators(slideActions, dispatch)
  };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SourcePageHome);
