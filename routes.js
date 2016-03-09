import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import ShopPage from './pages/ShopPage';
import ShopIndexPage from './pages/ShopIndexPage';
import EverydayPage from './pages/EverydayPage';
import SourcePage from './pages/SourcePage';

import ArticleDisplay from './components/ArticleDisplay/ArticleDisplay';


export default (
  <Route path="/" component={App}>
  	<IndexRoute component={ShopPage}/>
    <Route path="/danpin" component={ShopPage} />
    <Route path="/shop" component={ShopIndexPage}/>
    <Route path="/source" component={SourcePage}/>
    <Route path="/everyday" component={EverydayPage}>
      <Route  path="/everyday/:id" commponent={ArticleDisplay} />
    </Route>
    <Route path="/usermenu" component={SourcePage}/>
  </Route>
)
