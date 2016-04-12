import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import routes from '../routes';
import { Router } from 'react-router';

class Root extends React.Component {

  render() {
    const { store, history } = this.props;
    return (
        <Provider store={store}>
          <Router history={history} routes={routes}/>
        </Provider>
    );
  }
}

Root.PropTypes = {
  store: PropTypes.object.isRequired
}

export default Root;