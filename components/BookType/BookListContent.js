import React from 'react';
import BookListItem from './BookListItem';

const videoList= [
  {id:1,Src: 'http://file.duoyue.me/upload/book/book/20151103/2015_11_03_213307947_cut_c.png',Poster: '/wechat/1018/3021/books/bookbuy.aspx?browseuid=31574&w=3021&s=1018&id=6223',Title: '华胥引 ', Price: '10'},
  {id:2,Src: 'http://file.duoyue.me/upload/book/book/20151207/2015_12_07_095558591_cut_c.jpg',Poster: '/wechat/1018/3021/books/bookbuy.aspx?browseuid=31574&w=3021&s=1018&id=6223',Title: '致我们终将逝去的青春 ', Price: '12'},
  {id:3,Src: 'http://file.duoyue.me/upload/book/book/20151214/2015_12_14_170654945_cut_c.jpg',Poster: '/wechat/1018/3021/books/bookbuy.aspx?browseuid=31574&w=3021&s=1018&id=6223',Title: '致我们终将逝去的青春 ', Price: '14'},
  {id:4,Src: 'http://file.duoyue.me/upload/book/book/20151118/2015_11_18_135906207_cut_c.jpg',Poster: '/wechat/1018/3021/books/bookbuy.aspx?browseuid=31574&w=3021&s=1018&id=6223',Title: '华胥引 ', Price: '16'},
  {id:5,Src: 'http://file.duoyue.me/upload/book/book/20151214/2015_12_14_170654945_cut_c.jpg',Poster: '/wechat/1018/3021/books/bookbuy.aspx?browseuid=31574&w=3021&s=1018&id=6223',Title: '致我们终将逝去的青春 ', Price: '18'},
  {id:6,Src: 'http://file.duoyue.me/upload/book/book/20151103/2015_11_03_213307947_cut_c.png',Poster: '/wechat/1018/3021/books/bookbuy.aspx?browseuid=31574&w=3021&s=1018&id=6223',Title: '当代昆曲 ', Price: '20'},
]

const BookTypeData = [
  {
    "title": "新书推荐",
    "booklist": [
      {id:1,Src: 'http://file.duoyue.me/upload/book/book/20151103/2015_11_03_213307947_cut_c.png',Poster: '/wechat/1018/3021/books/bookbuy.aspx?browseuid=31574&w=3021&s=1018&id=6223',Title: '华胥引 ', Price: '10'},
      {id:2,Src: 'http://file.duoyue.me/upload/book/book/20151207/2015_12_07_095558591_cut_c.jpg',Poster: '/wechat/1018/3021/books/bookbuy.aspx?browseuid=31574&w=3021&s=1018&id=6223',Title: '致我们终将逝去的青春 ', Price: '12'},
      {id:3,Src: 'http://file.duoyue.me/upload/book/book/20151214/2015_12_14_170654945_cut_c.jpg',Poster: '/wechat/1018/3021/books/bookbuy.aspx?browseuid=31574&w=3021&s=1018&id=6223',Title: '致我们终将逝去的青春 ', Price: '14'},
      {id:4,Src: 'http://file.duoyue.me/upload/book/book/20151118/2015_11_18_135906207_cut_c.jpg',Poster: '/wechat/1018/3021/books/bookbuy.aspx?browseuid=31574&w=3021&s=1018&id=6223',Title: '华胥引 ', Price: '16'},
      {id:5,Src: 'http://file.duoyue.me/upload/book/book/20151214/2015_12_14_170654945_cut_c.jpg',Poster: '/wechat/1018/3021/books/bookbuy.aspx?browseuid=31574&w=3021&s=1018&id=6223',Title: '致我们终将逝去的青春 ', Price: '18'},
      {id:6,Src: 'http://file.duoyue.me/upload/book/book/20151103/2015_11_03_213307947_cut_c.png',Poster: '/wechat/1018/3021/books/bookbuy.aspx?browseuid=31574&w=3021&s=1018&id=6223',Title: '当代昆曲 ', Price: '20'}
    ]
  },
  {
    "title": "热点推荐",
    "booklist": [
      {id:1,Src: 'http://file.duoyue.me/upload/book/book/20151103/2015_11_03_213307947_cut_c.png',Poster: '/wechat/1018/3021/books/bookbuy.aspx?browseuid=31574&w=3021&s=1018&id=6223',Title: '华胥引 ', Price: '10'},
      {id:2,Src: 'http://file.duoyue.me/upload/book/book/20151207/2015_12_07_095558591_cut_c.jpg',Poster: '/wechat/1018/3021/books/bookbuy.aspx?browseuid=31574&w=3021&s=1018&id=6223',Title: '致我们终将逝去的青春 ', Price: '12'},
      {id:3,Src: 'http://file.duoyue.me/upload/book/book/20151214/2015_12_14_170654945_cut_c.jpg',Poster: '/wechat/1018/3021/books/bookbuy.aspx?browseuid=31574&w=3021&s=1018&id=6223',Title: '致我们终将逝去的青春 ', Price: '14'},
      {id:4,Src: 'http://file.duoyue.me/upload/book/book/20151118/2015_11_18_135906207_cut_c.jpg',Poster: '/wechat/1018/3021/books/bookbuy.aspx?browseuid=31574&w=3021&s=1018&id=6223',Title: '华胥引 ', Price: '16'},
      {id:5,Src: 'http://file.duoyue.me/upload/book/book/20151214/2015_12_14_170654945_cut_c.jpg',Poster: '/wechat/1018/3021/books/bookbuy.aspx?browseuid=31574&w=3021&s=1018&id=6223',Title: '致我们终将逝去的青春 ', Price: '18'},
      {id:6,Src: 'http://file.duoyue.me/upload/book/book/20151103/2015_11_03_213307947_cut_c.png',Poster: '/wechat/1018/3021/books/bookbuy.aspx?browseuid=31574&w=3021&s=1018&id=6223',Title: '当代昆曲 ', Price: '20'}
    ]
  },
]


class BookListContent extends React.Component {
	render() {
		return(
  		<div className="BookListContent">
  			{
            BookTypeData.map( (item, index) => {
          return(
            <div key={index}>
              <div className="mobile-book-title">{item.title}</div>
              <div className="book-list-item">
              {
                item.booklist.map( (item, index) => {
                  return (
                    <BookListItem  data={item} key={index}/>
                  );
                })
              }
              </div>
            </div>
  					)
  				})         
         }
  		</div>
		);
	}
}

export default BookListContent;