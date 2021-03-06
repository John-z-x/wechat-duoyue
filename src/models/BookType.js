/*
 * Created on 2016-04-13 19:07
 *
 * By Susan Su
 */

'use strict';

class BookType {
  constructor(json) {
    this.id = json.id || 0;
    this.href = BookType.createHref(json.id);
    this.bookTypeIcon = json.book_type_icon;
    this.bookTypeIconHigh = json.book_type_icon_high;
    this.bookTypePic = json.book_type_pic;
    this.title = json.title;
    this.bookCount = json.bookCount || 0;
    this.dtitle = json.dtitle;
  }

  static createHref(typeid) {
    let id = typeid || -1;
    return `/danpin/booklist/${id}`;
  }
}

export default BookType;