import React from 'react';
import classNames from 'classnames';

class MenuButton extends React.Component{
  render(){
    let { classname, onMenuButtonClick } = this.props;
    let classnames = classNames("MenuButton btn left " , classname);
    return (
      <span className={classnames} onClick={onMenuButtonClick && onMenuButtonClick}>
      	<em className="icon"/>
      </span>
    );
  }
};

export default MenuButton;