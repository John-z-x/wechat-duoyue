import React, { PropTypes } from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { fetchBookDetail, fetchBookRelatedList } from '../../actions/DanpinActions';

import withStyles from '../../decorators/withStyles';
import styles from './BookDetail.scss';

import CommonHeader from '../HeaderComponents/CommonHeader';
import ReturnButton from '../HeaderComponents/ReturnButton';
import CollectButton from '../HeaderComponents/CollectButton';

import Alert from '../Modals/Alert';

import BookInfo from './BookInfo';
import RecList from './RecList';
import ToDanpin from "./ToDanpin";

const alertContent = {
  "img": "http://www.duoyue.me/wechat/1018/3021/images/top/save.png",
  "content": "收藏成功"
};

@withStyles(styles)
class BookDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sucessModal: false
    }
  }
  //收藏功能
  onFavorChange() {
    this.setState({
      successModal: true
    });
    this.sucessModalTimer = setTimeout( ()=> {
      this.setState({
        successModal: false
      })
    }, 2000 )
  }

  componentWillUnmount() {
    window.clearTimeout(this.successModalTimer);
  }

  componentWillMount() {
    const {fetchBookDetail, fetchBookRelatedList} = this.props.actions;
    fetchBookDetail();
    fetchBookRelatedList();
  }

  render() {
    const { bookData, recData } = this.props;
    return (
        <div className="BookDetail">
          <CommonHeader>
            <ReturnButton />
            <CollectButton onFavorChange={::this.onFavorChange}/>
          </CommonHeader>
          <BookInfo data={bookData}/>
          <RecList title="相关图书" data={recData}/>
          <div className="bottom-blank"></div>
          <ToDanpin title="书城"/>
          {
            this.state.sucessModal &&
              <Alert content={alertContent} />
          }
        </div>
    );
  }
}

BookDetail.propTypes = {
  bookData: PropTypes.object.isRequired,
  recData: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
  return {
    bookData: state.danpin.bookDetail,
    recData: state.danpin.bookList
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({fetchBookDetail, fetchBookRelatedList}, dispatch)
  }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BookDetail);