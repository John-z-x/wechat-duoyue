import React from 'react';

////import withstyles from '../../decorators/withStyles';

class BookListItem extends React.Component {
  render() {
    const data = this.props.data;
    return (
      <div className="BookListItem">
        <div className="book-img-container">
          <img src={data.imgUrl} alt="书籍封面" title="书籍封面" className="book-img"/>
        </div>
        <span className="book-title">{data.name}</span>
        <span className="book-price">{data.price}</span>
      </div>
    );
  }
}

export default BookListItem;