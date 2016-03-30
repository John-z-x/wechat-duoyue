import React from 'react';
import BookListItem from './BookListItem';

class BookListRight extends React.Component {
  render() {
    const booklistdata = this.props.booklistdata;
    return (
      <div className="BookListRight right">
        <section className="top">
          <div className="header-line"></div>
          <div className="header-title">
            共<span>{booklistdata.length}</span>本
          </div>
        </section>
        {
          booklistdata.map( (item, index) => {
            return <BookListItem data={item} key={index}/>
          })
        }
      </div>
    );
  }
}

export default BookListRight;