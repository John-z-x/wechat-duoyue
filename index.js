'use strict';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, useRouterHistory} from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import useScroll from 'scroll-behavior/lib/useStandardScroll';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import configurestore from './store/configurestore';
import Root from './containers/Root';

const store = configurestore(browserHistory);
const createScrollHistory = useScroll(createBrowserHistory);
const appHistory = useRouterHistory(createScrollHistory)();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Root store={store} history={history} />,
    document.getElementById('Duoyue')
)