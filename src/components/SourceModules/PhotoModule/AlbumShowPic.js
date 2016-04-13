import React from 'react';
import {findDOMNode} from 'react-dom';

import AlbumShowDesc from './AlbumShowDesc';

const WIDTH = document.documentElement.clientWidth;
class AlbumShowPic extends React.Component {

  constructor(props) {
    super(props);
    //let paramsId = parseInt(this.props.paramsId);
    //let paramsLeft = width*(paramsId-1);
    this.state = {
      index: 0, //当前照片
      left: 0, //距离左部位置
      top: 0, //距离上部位置
      isScale: false, //判断是否已经缩放,
      scaleLevel: 1 //控制缩放比例来控制节点
    };
    this.scale = 1; //用于记录缩放停顿后的缩放比例
    this.winHeight = document.documentElement.clientHeight;
    this.startDistance = 0; //开始缩放时的距离
    this.moveXWhenScale = 0; //缩放时的距离
    this.SCALE_MAX = 2.5; //最大的缩放比例
    this.SCALE_MIN = 0.8; //最小的缩放比例
    //this.data = { touchstart,touchmove,touchstartLength, startX, startY,marginLeft.marginTop, moveX,moveY}
  }

  touchStart(e) {
    let target = e.targetTouches, startX1, startY1;
    this.touchstartLength = target.length;
    this.marginLeft = this.state.left;
    this.marginTop = this.state.top;
    if(this.touchstartLength == 1) {
      this.startX = target[0].pageX;
      this.startY = target[0].pageY;
    } else if(this.touchstartLength == 2) {
      this.setState({
        isScale: true
      });
      startX1 = target[1].pageX;
      startY1 = target[1].pageY;
      this.centerX = (this.startX + startX1) / 2;
      //this.centerY = (this.startY + startY1) / 2;
      this.startDistance = Math.sqrt(Math.pow((startX1 - this.startX), 2) + Math.pow(startY1 - this.startY, 2));
    }
  }

  touchMove(e) {
    e.preventDefault();
    let target = e.targetTouches, xValue, yValue;
    this.moveX = target[0].pageX - this.startX;
    this.moveY = target[0].pageY - this.startY;
    if(this.touchstartLength == 1) {
      xValue = this.marginLeft + this.moveX;
      yValue = this.marginTop + this.moveY;
      this.setState({
        left: xValue
      });
      if(this.state.isScale) {
        // 	var hi = parseInt(document.getElementById("PicIterm"+this.state.index).offsetHeight)-parseInt(document.documentElement.clientHeight);
        // 	var minH = (parseInt(this.state.top) >= -(hi*2)) || ((parseInt(this.state.top) <= -(hi*2))&&this.moveY > 0);
        // 	var maxH = (parseInt(this.state.top) <= hi ) || ((parseInt(this.state.top) >= hi)&&this.moveY < 0);
        if(true)//maxH&&minH)
        {
          this.setState({
            top: yValue
          });
        }
      }
    } else if(this.touchstartLength == 2) {
      let moveX0, moveY0, moveX1, moveY1, target = e.targetTouches;
      moveX0 = target[0].pageX;
      moveY0 = target[0].pageY;
      moveX1 = target[1].pageX;
      moveY1 = target[1].pageY;
      this.moveDistance = Math.sqrt(Math.pow((moveX0 - moveX1), 2) + Math.pow(moveY0 - moveY1, 2));
      this.imageZoom(e.target);
    }
  }

  touchEnd(e) {
    let BACK_SPEED = 0.02, BACK_TIME = 10, MOVE_TRESHOLD = 50,
        _this = this, {index, scaleLevel, left} = this.state,
        end;
    if(this.touchstartLength == 1) {
      let moveX = this.moveX, sliderListLength = this.props.data.length;
      if(scaleLevel > 1) {
        this.moveXWhenScale = left - ( -(index * WIDTH) - (this.centerX / (scaleLevel - 1)));
      }
      if(moveX < 0) {   //左滑
        if(!this.testIfAnimate("right")) return;
        if(moveX < -MOVE_TRESHOLD) {
          if(index < sliderListLength - 1) {
            end = -(index + 1) * WIDTH;
            this.playAnimate("left", end);
            this.setState({
              index: index + 1
            });
            this.reChangeScale();
          } else {
            end = -(index + scaleLevel - 1) * WIDTH;
            this.playAnimate("right", end);
          }
        } else {
          end = -(index + scaleLevel - 1) * WIDTH;
          this.playAnimate("right", end);
        }
      } else if(moveX > 0) {  //右滑
        if(!this.testIfAnimate("left")) return;
        if(moveX > MOVE_TRESHOLD) {
          if(index > 0) {
            end = -(index - 1) * WIDTH;
            this.playAnimate("right", end);
            this.setState({
              index: index - 1
            });
            this.reChangeScale();
          } else {
            end = 0;
            this.playAnimate("left", end);
          }
        } else {
          end = -index * WIDTH;
          this.playAnimate("left", end);
        }
      }
      this.moveX = 0;//滑动清零
    } else if(this.touchstartLength == 2) {
      this.scale = this.state.scaleLevel;
      if(this.moveDistance == 0) {
        this.setState({
          left: -index * WIDTH
        });
        this.reChangeScale();
      }

      function backAnimate() {
        let scaleAnimateLevel = _this.state.scaleLevel;
        if(scaleAnimateLevel + BACK_SPEED < 1) {
          _this.setState({
            scaleLevel: scaleAnimateLevel + BACK_SPEED
          });
          _this.backAnimation = setTimeout(backAnimate, BACK_TIME)
        } else {
          _this.setState({
            scaleLevel: 1
          });
          _this.reChangeScale();
        }
      }

      if(scaleLevel < 1) {
        backAnimate();
      }
    }
  }

  playAnimate(direction, end) {
    //direction 图片滚动的方向
    let speed, _this = this;
    const SPEED = 20, ANIMATE_TIME = 10;

    function animate() {
      let {left, index} = _this.state;
      if(direction === "left") {
        speed = -SPEED;
        if(left + speed > end) {
          _this.setState({
            left: left + speed
          });
          speed--;
          _this.isSlidering = true;
          _this.animate = setTimeout(animate, ANIMATE_TIME);
        } else {
          _this.setState({
            left: end
          });
          _this.isSlidering = false;
        }
      } else {
        speed = SPEED;
        if(left + speed < end) {
          _this.setState({
            left: left + speed
          });
          speed++;
          _this.isSlidering = true;
          _this.animate = setTimeout(animate, ANIMATE_TIME);

        } else {
          _this.setState({
            left: end
          });
          _this.isSlidering = false;
        }
      }
    }

    animate();
  }

  testIfAnimate(direction) {
    let {left, index, scaleLevel} = this.state;
    if(direction == "left") {
      if(left >= -index * WIDTH) {
        return true;
      }
    } else if(direction == "right") {
      if(left <= -(index + scaleLevel - 1) * WIDTH) {
        return true;
      }
    }
  }

  reChangeScale() {
    this.setState({
      isScale: false,
      scaleLevel: 1
    });
    this.moveX = 0;
    this.setState({
      top: 0
    });
    this.scale = 1;
    this.moveXWhenScale = 0;
  }

  imageZoom(img) {
    if(this.startDistance == 0 || this.moveDistance == 0) return;
    let scaleValue = (this.moveDistance / this.startDistance) * this.scale;
    if(scaleValue < this.SCALE_MAX && scaleValue > this.SCALE_MIN) {
      this.setState({
        scaleLevel: scaleValue
      }, () => this.changeCenter(img));
    }
  }

  changeCenter(img) {
    let {index, scaleLevel} = this.state,
        moveTop = (this.winHeight - img.offsetHeight) / 2,
        moveLeft;
    if(scaleLevel < this.SCALE_MAX && scaleLevel >= 1) {
      moveLeft = -index * WIDTH - this.centerX * (scaleLevel - 1) + this.moveXWhenScale * (scaleLevel - 1) * 0.66;
      this.setState({
        left: moveLeft,
        top: moveTop
      });
      //document.getElementById("AlbumShowPic").style.marginLeft = -((this.state.index - 1) * document.documentElement.offsetWidth) - ((this.centerX / this.imgWidth) * parseInt(document.getElementById("mobAlbumImg" + this.state.index).offsetWidth) - this.centerX) + this.moveXWhenScale * (demo - 1) * 0.66 + "px";
    } else if(scaleLevel < 1 && scaleLevel > this.SCALE_MIN) {
      this.setState({
        top: moveTop
      });
      //document.getElementById("AlbumShowPic").style.marginLeft = -((this.state.index - 1) * document.documentElement.offsetWidth) - ((this.centerX / this.imgWidth) * parseInt(document.getElementById("mobAlbumImg" + this.state.index).offsetWidth) - this.centerX) + "px";
    }
  }

  componentDidMount() {
  }

  componentWillUnmount() {
    window.clearTimeout(this.animate);
    window.clearTimeout(this.backAnimation)
  }

  render() {
    let {data, count, display}=this.props, {isScale, index, left, top, scaleLevel} = this.state, itemClassDefault = "AlbumShowPicItem left", itemClass;
    let scaleWidth = scaleLevel * WIDTH;
    return (
        <div>
          <ul className="AlbumShowPic" style={{ marginLeft: left, marginTop: top, width: WIDTH*(count+2)}}
              ref="slide"
              onTouchStart={::this.touchStart} onTouchMove={::this.touchMove} onTouchEnd={::this.touchEnd}>
            {
              data.map((item, i) => {
                let itemWidth;
                if(isScale) {  //给两边的间距
                  if(i == index - 1) {
                    itemClass = itemClassDefault + " " + "prev-spacing";
                  } else if(i == index + 1) {
                    itemClass = itemClassDefault + " " + "next-spacing";
                  } else {
                    itemClass = itemClassDefault;
                  }
                  if(i == index) {  //给放大的属性
                    itemWidth = scaleWidth;
                  } else {
                    itemWidth = WIDTH;
                  }
                } else {
                  itemClass = itemClassDefault;
                  itemWidth = WIDTH;
                }
                if(scaleLevel >= 1) {
                  return (
                      <li className={itemClass} key={i} ref={`pic${i}`} style={{width: itemWidth}}>
                        <img src={item.src} width="100%" alt={item.title} title={item.title}/>
                      </li>
                  )
                } else {
                  return (
                      <li className={itemClass} key={i} ref={`pic${i}`} style={{width: WIDTH}}>
                        <img src={item.src} style={{width: scaleWidth, marginLeft: WIDTH*(1 - scaleLevel)/2}}
                             alt={item.title} title={item.title} />
                      </li>
                  )
                }
              })
            }
          </ul>
          {
            display &&
              <AlbumShowDesc data={data[index]} count={this.moveX}/>
          }
        </div>
    );
  }
}

export default AlbumShowPic;