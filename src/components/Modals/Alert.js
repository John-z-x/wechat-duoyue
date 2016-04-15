import React from 'react';

////import withstyles from '../../decorators/withStyles';
import styles from './Alert.scss';

//@withStyles(styles)
class Alert extends React.Component {
  render() {
    const content = this.props.content;
    let imgCode = content.img ? <span className="alert-img" style={{backgroundImage: `url(${content.img})` }}> </span> : null;
    let contentCode = content.content ? <span className="alert-content">{content.content}</span>: null ;
    return (
      <div className={"Alert"}>
        {imgCode}
      {contentCode}
      </div>
    );
  }
}

export default Alert;