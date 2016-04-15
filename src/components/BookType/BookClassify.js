import React from 'react';
import { Link } from 'react-router';

class BookClassify extends React.Component {
  render() {
    const {data} = this.props;
    let bookClassify;
    if(!data) {
      bookClassify = null;
    }else {
      bookClassify = data.map((type,id) => {
        return(
          <Link  to={`/danpin/booklist/${id}`}  >
            <div className="classify-box">
              <div className="classify-book-bg clearfix">
                <div className="classify-book-word">
                  <div className="classify-name">{type.title}</div>
                  <div className="classify-nums">{type.num}</div>
                  <div className="classify-describe">{type.desc}</div>
                </div>
                <div className="classify-book-img">
                  <img src={type.src} alt="classfiy-img" title="classfiy-img" />
                </div>
              </div>
            </div>
          </Link>
        );
      })
    }
    return (
      <setion className="BookClassify">
        <div className="books-classify">
          <header className="title">
            图书分类
          </header>
          <div className="books-classify-list clearfix">
           {bookClassify}
          </div>
        </div>
      </setion>
    );
  }
}

export default BookClassify;