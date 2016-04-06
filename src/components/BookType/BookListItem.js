import React from 'react';

class BookListItem extends React.Component {
  render() {
    const {data} = this.props;
		return (
      <a href={data.Poster} className="BookListItem">
        <div className="book-item">
          <div ><img src={data.Src} width="100%" alt="book-img" title="book-img"/></div>
          <div className="book-name">{data.Title}</div>
          <div className="book-price">￥{data.Price}</div>
        </div>
      </a>
		);
	}
}

export default BookListItem;