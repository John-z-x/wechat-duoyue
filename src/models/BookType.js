/*
 * Created on 2016-04-13 19:07
 *
 * By Susan Su
 */

'use strict';

class BookType {
  constructor(json) {
    this.id = json.id;
    this.href = json.href;
    this.bookTypeIcon = json.bookTypeIcon;
    this.bookTypePic = json.bookTypePic;
    this.title = json.title;
    this.bookCount = json.bookCount;
    this.dtitle = json.dtitle;
  }
}

export default BookType;