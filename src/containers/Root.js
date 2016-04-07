import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import routes from '../routes';
import { Router } from 'react-router';
import DevTools from './DevTools';

class Root extends React.Component {

  render() {
    const { store, history } = this.props;
    return (
        <Provider store={store}>
          <div>
            <Router history={history} routes={routes}/>
            { __DEVTOOLS__ && <DevTools key="devtools" />}
          </div>
        </Provider>
    );
  }
}

Root.PropTypes = {
  store: PropTypes.object.isRequired
}

export default Root;