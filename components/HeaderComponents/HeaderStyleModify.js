import React from 'react';

class HeaderStyleModify extends React.Component {
  render() {
    let classname = this.props.HeaderStyleModifyClass || "";
    return (
        <span className={"HeaderStyleModify head-btn right "+classname} onClick={ () => this.props.onHeaderStyleModifyClick && this.props.onHeaderStyleModifyClick()}></span>
    );
  }
}

export default HeaderStyleModify;