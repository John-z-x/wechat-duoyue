import React from 'react';

class DownLoad extends React.Component {
  render() {
    let classname = this.props.DownLoadClass ? this.props.DownLoadClass : "";
    return (
        <span className={"DownLoadButton right "+classname} onClick={ () => this.props.OnDownLoadClick && this.props.OnDownLoadClick()}></span>
    );
  }
}

export default DownLoad;