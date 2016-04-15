import React from 'react';

import BookListContent from './BookListContent';
////import withstyles from '../../decorators/withStyles';
import styles from './BookType.scss';

import Tab from '../UIComponent/Tab/Tab';
import BookClassify from './BookClassify';
import CommonHeader from '../HeaderComponents/CommonHeader';
import ReturnButton from '../HeaderComponents/ReturnButton';
import SearchButton from '../HeaderComponents/SearchButton';

let TabItemsData = {
  content: [
    "出版", "榜单", "分类"
  ],
  tabClass: {
    tabBox: "Tab  clearfix",
    tabItemOn: "source-type-over",
    tabItemDefault: "source-type"
  }
}

const BookTypeData = [
  {
    "title": "新书推荐",
    "booklist": [
      {id:1,Src: 'http://file.duoyue.me/upload/book/book/20151103/2015_11_03_213307947_cut_c.png',Poster: '/danpin/bookbuy/1',Title: '华胥引 ', Price: '10'},
      {id:2,Src: 'http://file.duoyue.me/upload/book/book/20151207/2015_12_07_095558591_cut_c.jpg',Poster: '/danpin/bookbuy/1',Title: '致我们终将逝去的青春 ', Price: '12'},
      {id:3,Src: 'http://file.duoyue.me/upload/book/book/20151214/2015_12_14_170654945_cut_c.jpg',Poster: '/danpin/bookbuy/1',Title: '致我们终将逝去的青春 ', Price: '14'},
      {id:4,Src: 'http://file.duoyue.me/upload/book/book/20151118/2015_11_18_135906207_cut_c.jpg',Poster: '/danpin/bookbuy/1',Title: '华胥引 ', Price: '16'},
      {id:5,Src: 'http://file.duoyue.me/upload/book/book/20151214/2015_12_14_170654945_cut_c.jpg',Poster: '/danpin/bookbuy/1',Title: '致我们终将逝去的青春 ', Price: '18'},
      {id:6,Src: 'http://file.duoyue.me/upload/book/book/20151103/2015_11_03_213307947_cut_c.png',Poster: '/danpin/bookbuy/1',Title: '当代昆曲 ', Price: '20'}
    ]
  },
  {
    "title": "热点推荐",
    "booklist": [
      {id:1,Src: 'http://file.duoyue.me/upload/book/book/20151103/2015_11_03_213307947_cut_c.png',Poster: '/danpin/bookbuy/1',Title: '华胥引 ', Price: '10'},
      {id:2,Src: 'http://file.duoyue.me/upload/book/book/20151207/2015_12_07_095558591_cut_c.jpg',Poster: '/danpin/bookbuy/1',Title: '致我们终将逝去的青春 ', Price: '12'},
      {id:3,Src: 'http://file.duoyue.me/upload/book/book/20151214/2015_12_14_170654945_cut_c.jpg',Poster: '/danpin/bookbuy/1',Title: '致我们终将逝去的青春 ', Price: '14'},
      {id:4,Src: 'http://file.duoyue.me/upload/book/book/20151118/2015_11_18_135906207_cut_c.jpg',Poster: '/danpin/bookbuy/1',Title: '华胥引 ', Price: '16'},
      {id:5,Src: 'http://file.duoyue.me/upload/book/book/20151214/2015_12_14_170654945_cut_c.jpg',Poster: '/danpin/bookbuy/1',Title: '致我们终将逝去的青春 ', Price: '18'},
      {id:6,Src: 'http://file.duoyue.me/upload/book/book/20151103/2015_11_03_213307947_cut_c.png',Poster: '/danpin/bookbuy/1',Title: '当代昆曲 ', Price: '20'}
    ]
  },
]

const BookTypeData2 = [
  {
    "title": "畅销榜",
    "booklist": [
      {id:1,Src: 'http://file.duoyue.me/upload/book/book/20151103/2015_11_03_213307947_cut_c.png',Poster: '/danpin/bookbuy/1',Title: '华胥引 ', Price: '10'},
      {id:2,Src: 'http://file.duoyue.me/upload/book/book/20151207/2015_12_07_095558591_cut_c.jpg',Poster: '/danpin/bookbuy/1',Title: '致我们终将逝去的青春 ', Price: '12'},
      {id:3,Src: 'http://file.duoyue.me/upload/book/book/20151214/2015_12_14_170654945_cut_c.jpg',Poster: '/danpin/bookbuy/1',Title: '致我们终将逝去的青春 ', Price: '14'},
      {id:4,Src: 'http://file.duoyue.me/upload/book/book/20151118/2015_11_18_135906207_cut_c.jpg',Poster: '/danpin/bookbuy/1',Title: '华胥引 ', Price: '16'},
      {id:5,Src: 'http://file.duoyue.me/upload/book/book/20151214/2015_12_14_170654945_cut_c.jpg',Poster: '/danpin/bookbuy/1',Title: '致我们终将逝去的青春 ', Price: '18'},
      {id:6,Src: 'http://file.duoyue.me/upload/book/book/20151103/2015_11_03_213307947_cut_c.png',Poster: '/danpin/bookbuy/1',Title: '当代昆曲 ', Price: '20'}
    ]
  },
  {
    "title": "好评榜",
    "booklist": [
      {id:1,Src: 'http://file.duoyue.me/upload/book/book/20151103/2015_11_03_213307947_cut_c.png',Poster: '/danpin/bookbuy/1',Title: '华胥引 ', Price: '10'},
      {id:2,Src: 'http://file.duoyue.me/upload/book/book/20151207/2015_12_07_095558591_cut_c.jpg',Poster: '/danpin/bookbuy/1',Title: '致我们终将逝去的青春 ', Price: '12'},
      {id:3,Src: 'http://file.duoyue.me/upload/book/book/20151214/2015_12_14_170654945_cut_c.jpg',Poster: '/danpin/bookbuy/1',Title: '致我们终将逝去的青春 ', Price: '14'},
      {id:4,Src: 'http://file.duoyue.me/upload/book/book/20151118/2015_11_18_135906207_cut_c.jpg',Poster: '/danpin/bookbuy/1',Title: '华胥引 ', Price: '16'},
      {id:5,Src: 'http://file.duoyue.me/upload/book/book/20151214/2015_12_14_170654945_cut_c.jpg',Poster: '/danpin/bookbuy/1',Title: '致我们终将逝去的青春 ', Price: '18'},
      {id:6,Src: 'http://file.duoyue.me/upload/book/book/20151103/2015_11_03_213307947_cut_c.png',Poster: '/danpin/bookbuy/1',Title: '当代昆曲 ', Price: '20'}
    ]
  },
]

const BookTypeData3 = [
  {title:"经典文学",num:5,desc:"品书会让生活染上香气",src:"http://file.duoyue.me/upload/book/booktype/20151130/2015_11_30_114515099_cut_c.jpg"},
  {title:"青春文学",num:8,desc:"品书会让生活染上香气",src:"http://file.duoyue.me/upload/book/booktype/20151130/2015_11_30_114459939_cut_c.jpg"},
  {title:"职场进阶",num:4,desc:"品书会让生活染上香气",src:"http://file.duoyue.me/upload/book/booktype/20151130/2015_11_30_114515099_cut_c.jpg"},
  {title:"网络文学",num:5,desc:"品书会让生活染上香气",src:"http://file.duoyue.me/upload/book/booktype/20151130/2015_11_30_114515099_cut_c.jpg"}
]

////@withStyles(styles)
class BookType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 0
    }
    this.onTypeChange = this.onTypeChange.bind(this);
  }

  onTypeChange(index) {
    this.setState({
      type: index
    })
  }

  render() {
    let ContentCode, state = this.state.type;
    if( state == 0) {
      ContentCode = <BookListContent data={BookTypeData}/>;
    }else if( state == 1) {
      ContentCode = <BookListContent data={BookTypeData2}/>;
    }else if( state == 2) {
      ContentCode = <BookClassify data={BookTypeData3}/>;
    }
  	return(
  		<div className="BookType">
      	<CommonHeader>
          <ReturnButton />
          <SearchButton />
        </CommonHeader>
      	<Tab TabItemsData={TabItemsData} onTypeChange={this.onTypeChange}/>
        {ContentCode}
      </div>
  	);
  }
};

export default BookType;