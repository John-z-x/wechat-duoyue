import React from 'react';

class MenuButton extends React.Component{
  render(){
    let { classname, onMenuButtonClick } = this.props;
    let classnames = "MenuButton btn left " + classname ;
    return (
      <span className={classnames} onClick={onMenuButtonClick && onMenuButtonClick}>
      	<em className="icon"/>
      </span>
    );
  }
};

export default MenuButton;