import React from 'react';
////import withstyles from '../../decorators/withStyles';
import CommonHeader from '../HeaderComponents/CommonHeader';
import ReturnButton  from '../HeaderComponents/ReturnButton';
import HeaderTitle from '../HeaderComponents/HeaderTitle';
import { Link } from 'react-router';
import styles from './WeChatPayPanel.scss';

//@withStyles(styles)
class WeChatPayPanel extends React.Component {
  render() {
    return (
      <div className="WeChatPayPanel">
        {this.props.children}
      </div>  
    );
  }
}

export default WeChatPayPanel;