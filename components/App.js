import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import PageHeader from './PageHeader/PageHeader';


class App extends React.Component {

   render() {
      const {children} = this.props;
      return (
        <div className="app">
          <PageHeader className="Header-nav"/>
          <div className="wrapper">
           {children}
          </div>
        </div>
      )
  }
}

App.propTypes = {
    children: PropTypes.element.isRequired
}
;
export default connect()(App);