//资源展示瀑布流;
import React from 'react';
import SourceItem from './SourceItem';

class SourceBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      left: [],
      right: []
    };
    this.finishLoading = true;
    this.distribution = this.distribution.bind(this);
    this.ifNeedLazyLoad = this.ifNeedLazyLoad.bind(this);
  }

  componentDidMount() {
   // window.addEventListener("scroll", this.ifNeedLazyLoad, false)
    this.distribution();
  }

  componentWillUnmount() {
    //window.removeEventListener("scroll", this.ifNeedLazyLoad, false)
  }

  ifNeedLazyLoad() {
    const { LazyLoad } = this.props;
    if(this.checkScrollSide() && this.finishLoading) {
      this.finishLoading = false;
      LazyLoad(this.props.typeIndex);
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
    //this.finishLoading = true;
    this.setState({
      left: [],
      right: []
    });
    this.distribution(nextProps);
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
    if(!this.refs.left) return false;
    let leftHeight  = this.refs.left.offsetHeight,
        rightHeight = this.refs.right.offsetHeight;
    return (leftHeight <= rightHeight) ? "left" : "right";
  }

  render() {
    let left = this.state.left, right = this.state.right;
    return(
        <section >
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
          <footer className="bottom">
             已经加载到底部了。。。
          </footer>
        </section>
    );
  }
}

export default SourceBox;