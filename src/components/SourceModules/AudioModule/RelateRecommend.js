import React from 'react';

const WIDTH = document.documentElement.clientWidth;
class RelateRecommend extends React.Component {

  constructor(props) {
    super(props);
    let ITEM_WIDTH = 140;
    this.MixLeft = -(this.props.dataList.length)*ITEM_WIDTH + WIDTH;
    this.state = {
      left: 0
    }
  }

  componentDidMount() {
    this.slide(this.refs.recommend);
  }

  slide(node) {
    let _self = this;
    node.addEventListener("touchstart", _self.touchStart.bind(_self), false);
    node.addEventListener('touchmove', _self.touchMove.bind(_self), false);
  }

  touchStart(e) {
    e.stopPropagation();
    this.moveX = 0;
    this.touchstart = e.targetTouches;
    this.startX = this.touchstart[0].pageX;
    this.marginLeft = this.state.left;
  }

  touchMove(e) {
    e.stopPropagation();
    let touchmove = e.targetTouches;
    this.moveX = touchmove[0].pageX - this.startX;
    if((this.state.left <= 0 &&  this.state.left >= this.MixLeft) || ( this.state.left > 0 && this.moveX < 0)  || (this.state.left < this.MixLeft  && this.moveX > 0)  ) {
      this.setState({left: this.marginLeft + this.moveX});
    }
  }

  render() {
    const dataList = this.props.dataList;
    return (
      <section className="music-recommend" >
        <header className="clearfix">
          <span className="relate-recommend">相关推荐</span>
          <span className="total-recommend">共{dataList.length}个</span>
        </header>
        <section className="recommend-section" ref="recommend">
          <ul className="recommend-box" style={{marginLeft: this.state.left}}>
            {
              dataList.map( (item, index) =>
                <li className="recommend-item" key={index}>
                  <img src={item.picture} alt="fengmian" height="102" width="100%"/>
                  <span className="recommend-title">{item.title}</span>
                  <span className="recommend-num">共{index}首</span>
                </li>
              )
            }
          </ul>
        </section>
      </section>
    );
  }
}

export default RelateRecommend;