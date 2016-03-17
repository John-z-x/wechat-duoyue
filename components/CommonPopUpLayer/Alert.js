import React from 'react';

import withStyles from '../../decorators/withStyles';
import styles from './Alert.scss';

@withStyles(styles)
class Alert extends React.Component {
  render() {
    const content = this.props.Content, ShowOrHide = this.props.ShowOrHide;
    let imgCode = content.img ? <span className="img" style={{backgroundImage: `url(${content.img})` }}> </span> : null;
    let contentCode = content.content ? <span className="content">{content.content}</span>: null ;
    return (
      <div className={"Alert "+ShowOrHide}>
        {imgCode}
      {contentCode}
      </div>
    );
  }
}

export default Alert;