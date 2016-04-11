'use strict';


import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store/configureStore';
import Root from './containers/Root';

let state = window.__initialState__ || undefined;
const store = configureStore(browserHistory, state);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Root store={store} history={history}/>,
    document.getElementById('Duoyue')
)

