'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import ShopPage from './components/ShopPage/ShopPage.js';
import ShopIndex from './components/ShopIndex/ShopIndex.js';
import ShopContent from './components/ShopContent/ContentIndex.js';
import configurestore from './store/configurestore.js';
import { Provider } from 'react-redux';

const store = configurestore();

ReactDOM.render( 
  <Provider store={store}>
    <ShopPage />
  </Provider>
  ,
  document.getElementById('cart')
) 

