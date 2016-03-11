//资源展示瀑布流;
import React from 'react';
import SourceItem from './SourceItem';

class SourceBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 1,
      left: [],
      right: []
    }
    this.index = 1;
    this.finishLoading = true;
    this.distribution = this.distribution.bind(this);
    this.ifNeedLazyLoad = this.ifNeedLazyLoad.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.ifNeedLazyLoad, false)
    this.distribution();
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.ifNeedLazyLoad, false)
  }

  ifNeedLazyLoad() {
    const { LazyLoad } = this.props;
    if(this.checkScrollSide() && this.finishLoading) {
      LazyLoad();
      this.finishLoading = false;
    }
  }

  checkScrollSide() {
    var oParent = document.getElementById('main');
    var mostHeight = oParent.offsetHeight;
    var scrollTop = document.documentElement.scrollTop + document.body.scrollTop;
    var documentH = document.documentElement.clientHeight;
    return (mostHeight*(4/5) < scrollTop + documentH) ? true : false;
  }

  componentWillReceiveProps(nextProps) {
    this.distribution(nextProps);
    this.finishLoading = true;
  }

  componentWillUpdate(nextProps, nextState) {
    //TODO
    //return nextState.id !==
  }

  distribution(nextProps) {
    let list  = nextProps == undefined ? this.props.list : nextProps.list, parentBox, _self = this;
    list.map( (item) =>  {
      var img = new Image();
      img.src = item.pic;
      if(img.complete) {
        loadImg(item);
      }
      img.onload = function() {
        loadImg(item);
      }
    })

    function loadImg(item) {
      parentBox = _self.getBox();
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
    let left  = this.refs.left.offsetHeight,
        right = this.refs.right.offsetHeight;
    return (left <= right) ? "left" : "right";
  }

  render() {
    let left = this.state.left, right = this.state.right;
    return(
        <div id="main" className="SourceBox clearfix">
          <div className="left-box" id="left_box" ref="left">
            {
              left.map( (item, index) =>
                <SourceItem data={item} key={`source_${item.id}${index}`}/>
              )
            }
          </div>
          <div className="right-box" id="right_box" ref="right">
            {
              right.map( (item, index) =>
                <SourceItem data={item} key={`source_${item.id}${index}`}/>
              )
            }
          </div>
        </div>
    );
  }
}

export default SourceBox;