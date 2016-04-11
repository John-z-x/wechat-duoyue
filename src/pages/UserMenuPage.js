/*
 * Created on 2016-03-09 20:36
 *
 * By Susan Su
 */

'use strict';
import React from 'react';

import CommonHeader from '../components/HeaderComponents/CommonHeader';
import ReturnButton  from '../components/HeaderComponents/ReturnButton';

import BookShelf from '../components/PageUserMenu/BookShelf';
import UserInfo from '../components/PageUserMenu/UserInfo';
import ToSocialArea from '../components/PageUserMenu/ToSocialArea';

import withStyles from '../decorators/withStyles';
import styles from '../components/PageUserMenu/PageUserMenu.scss';

var dataArray = {
  userData: {
    src: require('../../assets/images/user-avatar.png'),
    name: "陈陈陈陈陈长"
  },
  bookCount: 18,
  bookData:
      [
        {src: require('../../assets/images/book1.jpg'),bookName:'销魂殿', href: "/danpin/bookbuy/1"},
        {src: require('../../assets/images/book2.jpg'),bookName:'华胥引', href: "/danpin/bookbuy/1"},
        {src: require('../../assets/images/book1.jpg'),bookName:'销魂殿', href: "/danpin/bookbuy/1"},
        {src: require('../../assets/images/book2.jpg'),bookName:'华胥引' , href: "/danpin/bookbuy/1"},
        {src: require('../../assets/images/book1.jpg'),bookName:'销魂殿', href: "/danpin/bookbuy/1"},
        {src: require('../../assets/images/book2.jpg'),bookName:'华胥引', href: "/danpin/bookbuy/1"},
        {src: require('../../assets/images/book1.jpg'),bookName:'销魂殿', href: "/danpin/bookbuy/1"},
        {src: require('../../assets/images/book2.jpg'),bookName:'华胥引', href: "/danpin/bookbuy/1"},
        {src: require('../../assets/images/book1.jpg'),bookName:'销魂殿', href: "/danpin/bookbuy/1"},
        {src: require('../../assets/images/book2.jpg'),bookName:'华胥引' , href: "/danpin/bookbuy/1"},
        {src: require('../../assets/images/book1.jpg'),bookName:'销魂殿', href: "/danpin/bookbuy/1"},
        {src: require('../../assets/images/book2.jpg'),bookName:'华胥引', href: "/danpin/bookbuy/1"},
        {src: require('../../assets/images/book1.jpg'),bookName:'销魂殿', href: "/danpin/bookbuy/1"},
        {src: require('../../assets/images/book2.jpg'),bookName:'华胥引', href: "/danpin/bookbuy/1"},
        {src: require('../../assets/images/book1.jpg'),bookName:'销魂殿', href: "/danpin/bookbuy/1"},
        {src: require('../../assets/images/book2.jpg'),bookName:'华胥引' , href: "/danpin/bookbuy/1"},
        {src: require('../../assets/images/book1.jpg'),bookName:'销魂殿', href: "/danpin/bookbuy/1"},
        {src: require('../../assets/images/book2.jpg'),bookName:'华胥引', href: "/danpin/bookbuy/1"},
        {src:require('../../assets/images/more-img.png'),bookName:'', href: "/danpin/books"}]

};

@withStyles(styles)
class UserMenuPage extends React.Component {
  render(){
    return (
        <div className='UserMenuPage'>
          <CommonHeader>
            <ReturnButton />
          </CommonHeader>
          <UserInfo data={dataArray.userData}/>
          <div className="border-style"></div>
          <BookShelf data={dataArray}/>
          <ToSocialArea />
        </div>
    );
  }
};
export default UserMenuPage;