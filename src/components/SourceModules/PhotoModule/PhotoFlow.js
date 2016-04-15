import React from 'react';
import { Link } from 'react-router';
import { findDOMNode } from 'react-dom';

import PhotoItem from './PhotoItem';
import PhotoListBottom from './PhotoListBottom';

class PhotoFlow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list:this.props.list,
      left: [],
      right: [],
      visibility: "hidden"
    };
    this.finishLoading = true;
  }

  componentDidMount() {
    window.addEventListener("scroll", ::this.ifNeedLazyLoad, false);
    this.distribution();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", ::this.ifNeedLazyLoad, false);
  }

  ifNeedLazyLoad() {
    if(this.checkScrollSide() && this.finishLoading) {
      this.lazyLoad();
      this.finishLoading = false;
      this.setState({
        visibility: "visible",
      })  
    }
  }
   
  checkScrollSide() {
    let oParent = findDOMNode(this.refs.photoContent);
    if(!oParent) return false;
    let mostHeight = oParent.offsetHeight;
    let scrollTop = document.documentElement.scrollTop + document.body.scrollTop;
    let documentH = document.documentElement.clientHeight;
    return (mostHeight*(4/5) < scrollTop + documentH) ? true : false;
  }
  
  lazyLoad() {
   let listTwo = this.props.listTwo;
   let list = this.state.list;
   this.setState({
     list: list.concat(listTwo),
    });
   this.setState({
      left: [],
      right: []
    });
    ::this.distribution();
  }

  distribution() {
    let list  = this.state.list , parentBox, _self = this;
    list.map( (item) =>  {
      var img = new Image();
      img.src = item.src;
      img.onload = function() {
        loadImg(item);
      }
    });

    function loadImg(item) {
      parentBox = _self.getBox();
      if(!parentBox) return;
      if(parentBox.indexOf("left") > -1) {
        _self.setState({
          left: [..._self.state.left, item]
        })
      } else {
        _self.setState({
          right: [..._self.state.right, item]
        })
      }
    }
  }

  getBox() {
    if(!this.refs.left) return null;
    let leftHeight  = findDOMNode(this.refs.left).offsetHeight,
        rightHeight = findDOMNode(this.refs.right).offsetHeight;
    return (leftHeight <= rightHeight) ? "left" : "right";
  }

	render() {
		let { left, right } = this.state;
		return(
			<div className="PhotoFlow">
				<div className="photo-content clearfix" ref="photoContent">
					<div className="left-box photo-box left"  ref="left">
            {
              left.map( (list, index) =>
                <PhotoItem data={list}  key={`source_${list.index}${index}`} />
              )
            }
          </div>
          <div className="right-box photo-box left" ref="right">
            {
              right.map( (list, index) =>
                <PhotoItem data={list}  key={`source_${list.index}${index}`}/>
              )
            }
          </div>		
				</div>
        <div className="bottomBox" style={{"visibility":this.state.visibility}}>
          <PhotoListBottom/>
        </div>
			</div>
		);
	}
}

export default PhotoFlow;