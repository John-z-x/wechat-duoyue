import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import PageHeader from '../PageHeader/PageHeader';
import Cart from '../UIComponent/Cart/Cart';
import withStyles from '../../decorators/withStyles';
import styles from './App.scss';

@withStyles(styles)
class App extends React.Component {

   requireCart(path) {;
     return path === '/' || ['danpin','shop','source','everyday'].includes(path.split('/')[1]);
   }

   render() {
      const { children, defaultPath } = this.props;

      return (
        <div className="app">
          <PageHeader className="Header-nav" defaultNav={defaultPath}/>
          <div className="wrapper">
           {children}
          </div>
          { this.requireCart(defaultPath) && <Cart />}
        </div>
      )
  }
}

App.propTypes = {
  children: PropTypes.node,
  defaultPath: PropTypes.string.isRequired
}

function mapStateToProps(state, ownProps) {
  return {
    defaultPath: ownProps.location.pathname
  }
}
export default connect(mapStateToProps)(App);