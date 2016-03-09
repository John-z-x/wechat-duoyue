import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App.js';
import ShopPage from './components/ShopPage/ShopPage.js';
import ShopIndex from './components/ShopIndex/ShopIndex.js';
import EverydayPage from './components/EveryDay/EverydayPage.js';

export default (
  <Route path="/" component={App}>
  	<IndexRoute component={ShopPage}/>
    <Route path="/danpin" component={ShopPage} />
    <Route path="/shop" component={ShopIndex}/>
     <Route path="/everyday" component={EverydayPage}/>
  </Route>
)
