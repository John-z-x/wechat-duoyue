import React from 'react';

const booksclassify = [
  {title:"经典文学",num:5,desc:"品书会让生活染上香气",src:"http://file.duoyue.me/upload/book/booktype/20151130/2015_11_30_114515099_cut_c.jpg"},
  {title:"青春文学",num:8,desc:"品书会让生活染上香气",src:"http://file.duoyue.me/upload/book/booktype/20151130/2015_11_30_114459939_cut_c.jpg"},
  {title:"职场进阶",num:4,desc:"品书会让生活染上香气",src:"http://file.duoyue.me/upload/book/booktype/20151130/2015_11_30_114515099_cut_c.jpg"},
  {title:"网络文学",num:5,desc:"品书会让生活染上香气",src:"http://file.duoyue.me/upload/book/booktype/20151130/2015_11_30_114515099_cut_c.jpg"}
]


class BookClassify extends React.Component {
  render() {
    return (
      <div className="books-classify">
        <div className="title">
          图书分类
        </div>
        <div className="books-classify-list clearfix">
                {
                    booksclassify.map((type, id) => {
                      return(
                          <a href=""  key={id}>
                            <div className="classify-box">
                              <div className="classify-book-bg clearfix">
                                <div className="classify-book-word">
                                  <div className="classify-name">{type.title}</div>
                                  <div className="classify-nums">{type.num}</div>
                                  <div className="classify-describe">{type.desc}</div>
                                </div>
                                <div className="classify-book-img">
                                  <img src={type.src} alt="classfiy-img" />
                                </div>
                              </div>
                            </div>
                          </a>
                      )
                    })
                    }
        </div>
      </div>
    );
  }
}

export default BookClassify;