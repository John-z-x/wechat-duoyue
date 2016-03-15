import React from 'react';
import { Route, IndexRoute, Link } from 'react-router';

import App from './components/App/App';
import ShopPage from './pages/ShopPage';
import ShopIndexPage from './pages/ShopIndexPage';
import EverydayPage from './pages/EverydayPage';
import SourcePage from './pages/SourcePage';
import UserMenuPage from './pages/UserMenuPage';
import SocialArea from './components/SocialArea/SocialArea';
import BookList from './components/BookList/BookList';
import BookType from './components/BookType/BookType';

import ArticleDisplay from './components/ArticleDisplay/ArticleDisplay';
import EverydayPageIndex from './components/PageEveryDay/index';
import BookDetail from './components/BookDetail/BookDetail';

export default (

  <Route path="/" component={App} >
  	<IndexRoute component={ShopPage}/>
    <Route path="/danpin" component={ShopPage}/>
    <Route path="/shop" component={ShopIndexPage}/>
    <Route path="/source" component={SourcePage}/>

    <Route path="/everyday" component={EverydayPage}>
      <IndexRoute component={EverydayPageIndex}/>
      <Route path=":id/display" component={ArticleDisplay} />
    </Route>

    <Route path="/usermenu" component={UserMenuPage}/>
    <Route path="/socialarea" component={SocialArea}/>
  </Route>
)
