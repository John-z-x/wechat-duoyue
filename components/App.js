import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import PageHeader from './ShopContent/PageHeader.js';


var allData = {
  hdData: {
    title: '单品',
    data: [
            {className: 'book-store-menu', href: '/danpin'},
            {className: 'good-store-menu', href: '/shop'}
          ],
  }

}

class App extends React.Component {

   // static propTypes = {
   //    children: PropTypes.element.isRequired
   // };

   render() {
      const {children} = this.props;
      return (
        <div>
          <PageHeader hdData={allData.hdData}/>
           {children}
        </div>
      )
  }
}

export default connect()(App);