'use strict';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory} from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configurestore from './store/configurestore.js';
import Root from './containers/Root.js';

const store = configurestore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Root store={store} history={history} />,
    document.getElementById('cart')
)