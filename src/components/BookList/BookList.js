import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {fetchBookListData, fetchBooktype} from '../../actions/DanpinActions';

import withStyles from '../../decorators/withStyles';
import styles from './BookList.scss';

import CommonHeader from '../HeaderComponents/CommonHeader';
import ReturnButton from '../HeaderComponents/ReturnButton';
import Tab from '../UIComponent/Tab/Tab';
import BookListRight from './BookListRight';

@withStyles(styles)
class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.type = this.props.params.typeIndex;
    this.loaded = true;
    this.tabData = {};
  }

  componentWillReceiveProps(np) {
    const { tabItemsData , actions} = np, _this = this;
    let npt = tabItemsData.content[0], tpt = this.props.tabItemsData.content[0];

    if( typeof npt != undefined && npt != tpt && this.loaded) {
      tabItemsData.content.map( (item, index) => {
        _this.tabData[index] = item.id;
      });
      this.loaded = false;
      actions.fetchBookListData({"type": "type", "typeid": this.getIndex()});
    }
  }

  getIndex() {
    let data = this.tabData;
    for(let i in data) {
      if(data[i] == this.type) {
        return i;
      }
    }
  }

  onTypeChange(index) {
    const {fetchBookListData} = this.props.actions;
    let id = this.tabData[index];
    typeof id != undefined && fetchBookListData({"type": "type", "typeid": this.tabData[index]});
  }

  componentWillMount() {
    const {fetchBooktype} = this.props.actions;
    fetchBooktype();
  }

  render() {
    const {tabItemsData, bookList} = this.props;
    return (
        <div className="BookList">
          <CommonHeader>
            <ReturnButton />
          </CommonHeader>
          <Tab TabItemsData={tabItemsData} onTypeChange={::this.onTypeChange} typeIndex={this.type}/>
          <BookListRight booklistdata={bookList}/>
        </div>
    );
  }
}

BookList.propTypes = {
  tabItemsData: PropTypes.object,
  bookList: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
  const {bookType, bookList: {type}} = state.danpin;
  const typeData = bookType.map( (json) => {
    return {
      "id": json.id,
      "title": json.title,
      "pic": {
        "default": `url(${json.bookTypeIcon})`,
        "on": `url(${json.bookTypeIconHigh})`
      }
    }
  });

  const tabItemsData = {
    "content": typeData,
    "tabClass": {
      tabBox: "Tab",
      tabItemDefault: "menu-item",
      tabItemOn: "menu-item-on"
    }
  };

  return {
    tabItemsData: tabItemsData,
    bookList: type
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({fetchBookListData, fetchBooktype}, dispatch)
  }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BookList);

