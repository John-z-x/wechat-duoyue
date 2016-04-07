import React from 'react';

import withStyles from '../../decorators/withStyles';

class BookListItem extends React.Component {
  render() {
    const data = this.props.data;
    return (
      <div className="BookListItem">
        <img src={data.imgUrl} alt="书籍封面" title="书籍封面" className="book-img"/>
        <span className="book-title">{data.name}</span>
        <span className="book-price">{data.price}</span>
      </div>
    );
  }
}

export default BookListItem;