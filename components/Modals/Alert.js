import React from 'react';

import withStyles from '../../decorators/withStyles';
import styles from './Alert.scss';

@withStyles(styles)
class Alert extends React.Component {
  render() {
    const content = this.props.content;
    let imgCode = content.img ? <span className="img" style={{backgroundImage: `url(${content.img})` }}> </span> : null;
    let contentCode = content.content ? <span className="content">{content.content}</span>: null ;
    return (
      <div className={"Alert"}>
        {imgCode}
      {contentCode}
      </div>
    );
  }
}

export default Alert;