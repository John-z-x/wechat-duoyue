/*
 * Created on 2016-03-09 20:36
 *
 * By Susan Su
 */

'use strict';
import React from 'react';
import ReturnButton  from '../components/ReturnButton/ReturnButton'

import BookShelf from '../components/PageUserMenu/BookShelf';
import UserInfor from '../components/PageUserMenu/UserInfor';
import SocialArea from '../components/PageUserMenu/SocialArea';

var dataArray = {
  userData: {
    src: "../images/user-avatar.png",
    name: "陈陈陈陈陈长"
  },
  bookItem: 7,
  bookData: [
    {src:'../images/book1.jpg',bookName:'销魂殿'},
    {src:'../images/book2.jpg',bookName:'华胥引'},
    {src:'../images/book1.jpg',bookName:'销魂殿'},
    {src:'../images/book2.jpg',bookName:'华胥引'},
    {src:'../images/book2.jpg',bookName:'华胥引华胥引华胥引华胥引'}
  ]
};

class UserMenuPage extends React.Component {
  render(){
    return (
        <div className='UserMenuPage'>
          <ReturnButton />
          <UserInfor data={dataArray.userData}/>
          <div className="border-style"></div>
          <BookShelf data={dataArray}/>
          <SocialArea />
        </div>
    );
  }
};
export default UserMenuPage;