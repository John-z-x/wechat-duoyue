import React from 'react';

import CommonHeader from '../HeaderComponents/CommonHeader';
import ReturnButton from '../HeaderComponents/ReturnButton';
import withStyles from '../../decorators/withStyles';
import styles from './NewBookList.scss';
import BookItem from './BookItem';

const  newbooksData =
[
  {
    title: "本周新书推荐",
    data: [
      {href: '/danpin/bookbuy/6227', src: 'http://file.duoyue.me/upload/book/book/20151207/2015_12_07_095558591_cut_c.jpg', title: '他来了请闭眼', price: 31.50},
      {href: '/danpin/bookbuy/6227', src: require("../../../assets/images/6.jpg"), title: '那些年我们追过的女孩', price: 17.34},
      {href: '/danpin/bookbuy/6227', src: require("../../../assets/images/5.jpg"), title: '微微一笑', price: 17.34},
      {href: '/danpin/bookbuy/6227', src: require("../../../assets/images/6.jpg"), title: '那些年我们追过的女孩', price: 17.34},
      {href: '/danpin/bookbuy/6227', src: require("../../../assets/images/5.jpg"), title: '微微一笑倾人城', price: 17.34}
    ]
  },
  {
    title: "本周热点推荐",
    data: [
      {href: '/danpin/bookbuy/6227', src: 'http://file.duoyue.me/upload/book/book/20151207/2015_12_07_095558591_cut_c.jpg', title: '他来了请闭眼', price: 31.50},
      {href: '/danpin/bookbuy/6227', src: require("../../../assets/images/6.jpg"), title: '那些年我们追过的女孩', price: 17.34},
      {href: '/danpin/bookbuy/6227', src: require("../../../assets/images/5.jpg"), title: '微微一笑', price: 17.34},
      {href: '/danpin/bookbuy/6227', src: require("../../../assets/images/6.jpg"), title: '那些年我们追过的女孩', price: 17.34},
      {href: '/danpin/bookbuy/6227', src: require("../../../assets/images/5.jpg"), title: '微微一笑倾人城', price: 17.34}
    ]
  }
]

@withStyles(styles)
class NewBookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      indexList: [],
      type: this.props.params.type
    }
  }

  render() {
    const newbooklist = newbooksData[this.state.type];
    return (
      <div className="NewBookList"> 
        <CommonHeader>
          <ReturnButton />
        </CommonHeader>
        <section className="book-list-title">
          {newbooklist.title}
        </section>
        <section className="boos">
        {
            newbooklist.data.map( (item , i) =>
            <BookItem data={item} key={i}/>
          )
        }
        </section>
      </div>
    );
  }
}

export default NewBookList;