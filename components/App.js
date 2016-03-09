import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import PageHeader from './PageHeader/PageHeader';
import Cart from './CartUIComponent/Cart'


var allData = {
  hdData: {
    title: '单品',
    data: [
            {className: 'book-store-menu-cur', href: '/danpin'},
            {className: 'good-store-menu', href: '/everyday'}
          ],
  }

}

class App extends React.Component {



   render() {
      const {children} = this.props;
      return (
        <div className="app">
          <PageHeader className="Header-nav" hdData={allData.hdData}/>
          <div className="wrapper">
           {children}
          </div>
          <Cart />
        </div>
      )
  }
}

App.propTypes = {
    children: PropTypes.element.isRequired
}
;
export default connect()(App);