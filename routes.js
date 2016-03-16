import React from 'react';
import { Route, IndexRoute, Link } from 'react-router';

/* Five header modules */
import App from './components/App/App';
import ShopPage from './pages/ShopPage';
import ShopIndexPage from './pages/ShopIndexPage';
import EverydayPage from './pages/EverydayPage';
import SourcePage from './pages/SourcePage';
import UserMenuPage from './pages/UserMenuPage';

/* Five home page for header modules */
import EverydayPageHome from './components/PageEveryDay/home';
import ShopPageHome from './components/PageShop/home';
import ShopPageIndexHome from './components/PageShopIndex/home';


import BookList from './components/BookList/BookList';
import BookType from './components/BookType/BookType';
import NewBookList from './components/NewBookList/NewBookList';

import ArticleDisplay from './components/ArticleDisplay/ArticleDisplay';
import BookDetail from './components/BookDetail/BookDetail';

import GoodsList from './components/GoodsList/GoodsList';
import CommodityDetail from './components/CommodityDetail/CommodityDetail';

import Favorites from './components/Favorites/Favorites';

import VideoModule from './components/SourceModules/VideoModule/VideoModule';

import OrderList from './components/OrderList/OrderList';
import OrderListHome from './components/OrderList/home';
import OrderDisplay from './components/OrderDisplay/OrderDisplay';

import SocialArea from './components/SocialArea/SocialArea';
import SocialAreaHome from './components/SocialArea/home';
import SocialDetail from './components/SocialArea/SocialDetail';

export default (

  <Route path="/" component={App} >
  	<IndexRoute component={ShopPageHome}/>
    <Route path="/danpin" component={ShopPage}>
      <IndexRoute component={ShopPageHome}/>
      <Route path="books" component={BookType}/>
      <Route path="booklist/:typeIndex" component={BookList}/>
      <Route path="bookbuy/:id" component={BookDetail}/>
      <Route path="newbooklist/:type" component={NewBookList}/>
    </Route>
    <Route path="/shop" component={ShopIndexPage}>
      <IndexRoute component={ShopPageIndexHome} />
      <Route path="goodslist/:typeId" component={GoodsList}/>
      <Route path="goodsbuy/:id" component={CommodityDetail}/>
    </Route>
    <Route path="/source" component={SourcePage}/>

    <Route path="/everyday" component={EverydayPage}>
      <IndexRoute component={EverydayPageHome}/>
      <Route path=":id/display" component={ArticleDisplay} />
    </Route>

    <Route path="/usermenu" component={UserMenuPage}/>
    <Route path="/favorites" component={Favorites}/>

    <Route path="/orderlist" component={OrderList}>
      <IndexRoute component={OrderListHome} />
      <Route path=":id/display" component={OrderDisplay}/>
    </Route>

    <Route path="/socialarea" component={SocialArea}>
      <IndexRoute component={SocialAreaHome} />
      <Route path=":id/display" component={SocialDetail}/>
    </Route>
  </Route>
)
