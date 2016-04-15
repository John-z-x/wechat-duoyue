import React from 'react';

////import withstyles from '../../decorators/withStyles';
import styles from './BookList.scss';

import CommonHeader from '../HeaderComponents/CommonHeader';
import ReturnButton from '../HeaderComponents/ReturnButton';
import Tab from '../UIComponent/Tab/Tab';
import BookListRight from './BookListRight';

const TabItemsData = {
  content: [
    {
      title: "经典文学",
      pic: {
        default: "url('http://file.duoyue.me/upload/book/booktype/20151130/2015_11_30_160912826.png')",
        on: "url('http://file.duoyue.me/upload/book/booktype/20151130/2015_11_30_160918791.png')"
      }
    },
    {
      title: "青春文学",
      pic: {
        default: "url('http://file.duoyue.me/upload/book/booktype/20151130/2015_11_30_160850125.png')",
        on: "url('http://file.duoyue.me/upload/book/booktype/20151130/2015_11_30_160857590.png')"
      }
    },
    {
      title: "职场进阶",
      pic: {
        default: "url('http://file.duoyue.me/upload/book/booktype/20151130/2015_11_30_160819925.png')",
        on: "url('http://file.duoyue.me/upload/book/booktype/20151130/2015_11_30_160826813.png')"
      }
    },
    {
      title: "网络文学",
      pic: {
        default: "url('http://file.duoyue.me/upload/book/booktype/20151130/2015_11_30_160753929.png')",
        on: "url('http://file.duoyue.me/upload/book/booktype/20151130/2015_11_30_160806126.png')"
      }
    }

  ],
  tabClass: {
    tabBox: "Tab",
    tabItemDefault: "menu-item",
    tabItemOn: "menu-item-on"
  }
}

const BookListData = [
  {name: "三体", type:0, imgUrl: "http://file.duoyue.me/upload/book/book/20151118/2015_11_18_140358570_cut_c.jpg", "price": 150},
  {name: "三体", type:1, imgUrl: "http://file.duoyue.me/upload/book/book/20151126/2015_11_26_182029270_cut_c.jpg", "price": 160},
  {name: "三体", type:2, imgUrl: "http://file.duoyue.me/upload/book/book/20151126/2015_11_26_172836293_cut_c.jpg", "price": 170},
  {name: "三体", type:3, imgUrl: "http://file.duoyue.me/upload/book/book/20151118/2015_11_18_140358570_cut_c.jpg", "price": 180},
  {name: "三体", type:0, imgUrl: "http://file.duoyue.me/upload/book/book/20151126/2015_11_26_182029270_cut_c.jpg", "price": 190},
  {name: "三体", type:2, imgUrl: "http://file.duoyue.me/upload/book/book/20151201/2015_12_01_110431890_cut_c.jpg", "price": 100},
  {name: "三体", type:0, imgUrl: "http://file.duoyue.me/upload/book/book/20151126/2015_11_26_182029270_cut_c.jpg", "price": 160},
  {name: "三体", type:3, imgUrl: "http://file.duoyue.me/upload/book/book/20151126/2015_11_26_172836293_cut_c.jpg", "price": 170},
  {name: "三体", type:0, imgUrl: "http://file.duoyue.me/upload/book/book/20151126/2015_11_26_182029270_cut_c.jpg", "price": 160},
  {name: "三体", type:3, imgUrl: "http://file.duoyue.me/upload/book/book/20151126/2015_11_26_172836293_cut_c.jpg", "price": 170},
  {name: "三体", type:0, imgUrl: "http://file.duoyue.me/upload/book/book/20151118/2015_11_18_140358570_cut_c.jpg", "price": 180},
  {name: "三体", type:2, imgUrl: "http://file.duoyue.me/upload/book/book/20151126/2015_11_26_182029270_cut_c.jpg", "price": 190},
  {name: "三体", type:3, imgUrl: "http://file.duoyue.me/upload/book/book/20151201/2015_12_01_110431890_cut_c.jpg", "price": 100},
  {name: "三体", type:1, imgUrl: "http://file.duoyue.me/upload/book/book/20151126/2015_11_26_182029270_cut_c.jpg", "price": 160},
  {name: "三体", type:0, imgUrl: "http://file.duoyue.me/upload/book/book/20151126/2015_11_26_172836293_cut_c.jpg", "price": 170},
  {name: "三体", type:1, imgUrl: "http://file.duoyue.me/upload/book/book/20151126/2015_11_26_182029270_cut_c.jpg", "price": 160},
  {name: "三体", type:0, imgUrl: "http://file.duoyue.me/upload/book/book/20151126/2015_11_26_172836293_cut_c.jpg", "price": 170},
  {name: "三体", type:2, imgUrl: "http://file.duoyue.me/upload/book/book/20151118/2015_11_18_140358570_cut_c.jpg", "price": 180},
  {name: "三体", type:0, imgUrl: "http://file.duoyue.me/upload/book/book/20151126/2015_11_26_182029270_cut_c.jpg", "price": 190},
  {name: "三体", type:0, imgUrl: "http://file.duoyue.me/upload/book/book/20151201/2015_12_01_110431890_cut_c.jpg", "price": 100},
  {name: "三体", type:0, imgUrl: "http://file.duoyue.me/upload/book/book/20151126/2015_11_26_182029270_cut_c.jpg", "price": 160},
  {name: "三体", type:0, imgUrl: "http://file.duoyue.me/upload/book/book/20151126/2015_11_26_172836293_cut_c.jpg", "price": 170},
  {name: "三体", type:3, imgUrl: "http://file.duoyue.me/upload/book/book/20151126/2015_11_26_182029270_cut_c.jpg", "price": 160},
  {name: "三体", type:2, imgUrl: "http://file.duoyue.me/upload/book/book/20151126/2015_11_26_172836293_cut_c.jpg", "price": 170},
  {name: "三体", type:3, imgUrl: "http://file.duoyue.me/upload/book/book/20151118/2015_11_18_140358570_cut_c.jpg", "price": 180},
  {name: "三体", type:3, imgUrl: "http://file.duoyue.me/upload/book/book/20151126/2015_11_26_182029270_cut_c.jpg", "price": 190},
  {name: "三体", type:1, imgUrl: "http://file.duoyue.me/upload/book/book/20151201/2015_12_01_110431890_cut_c.jpg", "price": 100},
  {name: "三体", type:1, imgUrl: "http://file.duoyue.me/upload/book/book/20151126/2015_11_26_182029270_cut_c.jpg", "price": 160},
  {name: "三体", type:1, imgUrl: "http://file.duoyue.me/upload/book/book/20151126/2015_11_26_172836293_cut_c.jpg", "price": 170}
]

////@withStyles(styles)
class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.type = this.props.params.typeIndex;
    console.log(this.type);
    this.state = {
      typeList: [],
      type: this.type
    }
    this.onTypeChange = this.onTypeChange.bind(this);
  }

  onTypeChange(index) {
    let typeDataList;
    this.type = index;
    typeDataList = BookListData.filter( (item) => {
      return item.type == this.type;
    })
    this.setState({
      typeList: typeDataList
    })
  }

  componentDidMount() {
    this.onTypeChange(this.type);
  }

  render() {
    return (
      <div className="BookList">
        <CommonHeader>
          <ReturnButton />
        </CommonHeader>
        <Tab TabItemsData={TabItemsData} onTypeChange={this.onTypeChange} typeIndex={this.state.type}/>
        <BookListRight booklistdata = {this.state.typeList}/>
      </div>
    );
  }
}

export default BookList;