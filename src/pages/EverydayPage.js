//每天列表
import React, {PropTypes} from 'react';
import Cart from '../components/UIComponent/Cart/Cart';

class EverydayPage extends React.Component {
  static propTypes = {
    children: PropTypes.any
  };
    render() {
      return(
        <div className="EverydayPage">
          {this.props.children}
          <Cart />
        </div>
      )
    }
	}

export default EverydayPage;