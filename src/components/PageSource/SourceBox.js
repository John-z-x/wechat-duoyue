//资源展示瀑布流;
import React from 'react';
import SourceItem from './SourceItem';
import utils from '../../utils/utils';

class SourceBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      left: [],
      right: []
    };
    this.finishLoading = true;
    this.index = 1;
    this.LOAD_DELAY = 1000;
    utils.bindMethods(this, "distribution", "ifNeedLazyLoad");
  }

  componentDidMount() {
    window.addEventListener("scroll", this.ifNeedLazyLoad, false)
    this.distribution();
    this.props.sourceLazyLoad(this.props.typeIndex, 0);
  }

  componentWillUnmount() {
    window.clearTimeout(this.loadDeffer);
    window.removeEventListener("scroll", this.ifNeedLazyLoad, false);
    //TODO
    //1.数据加载
    //2.返回数据重新加载但是不刷新
    //3.判断底部的显示
  }

  ifNeedLazyLoad() {
    const { sourceLazyLoad } = this.props;
    if(this.checkScrollSide() && this.finishLoading) {
      this.finishLoading = false;
      sourceLazyLoad(this.props.typeIndex, this.index);
      this.index++;
    }
  }

  checkScrollSide() {
    let oParent = document.getElementById('main');
    if(!oParent) return false;
    let mostHeight = oParent.offsetHeight;
    let scrollTop = document.documentElement.scrollTop + document.body.scrollTop;
    let documentH = document.documentElement.clientHeight;
    return (mostHeight*(7/8) < scrollTop + documentH) ? true : false;
  }

  componentWillReceiveProps(nextProps) {
    this.finishLoading = true ;
    this.distribution(nextProps);
  }

  componentWillUpdate(nextProps, nextState) {
    //TODO
    //1.优化加载显示
  }

  distribution(nextProps) {
    let list  = nextProps == undefined ? this.props.list : nextProps.list, parentBox, _self = this;
    list.map( (item) =>  {
      var img = new Image();
      img.src = item.pic;
      img.onload = () => {
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
    let leftHeight  = this.refs.left.offsetHeight,
        rightHeight = this.refs.right.offsetHeight;
    return (leftHeight <= rightHeight) ? "left" : "right";
  }

  render() {
    let left = this.state.left, right = this.state.right;
    return(
        <section >
          <div id="main" className="SourceBox clearfix">
            <div className="single-box left" id="left_box" ref="left">
              {
                left.map( (item, index) =>
                  <SourceItem data={item} key={`source_${item.id}${index}`}/>
                )
              }
            </div>
            <div className="single-box right" id="right_box" ref="right">
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