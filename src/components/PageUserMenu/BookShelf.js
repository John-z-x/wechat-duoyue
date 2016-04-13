import React from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import SliderDot from '../UIComponent/Slider/SliderDot';
import utils from '../../utils/utils';

class BookShelf extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      left: 0
    };
    this.isSlidering = false;
    this.winWidth = document.documentElement.clientWidth;
    this.PAGE_COUNT = 6;
    utils.bindMethods(this, "touchStart", "touchMove", "touchEnd", "slide", "playAnimate");
  }

  touchStart(e) {
    let touchStartPoint = e.targetTouches;
    this.startX = touchStartPoint[0].pageX;
    this.startLeft = this.state.left;
  }

  touchMove(e) {
    e.preventDefault();
    let touchPoint = e.targetTouches;
    if(this.isSlidering) return;
    this.moveX = touchPoint[0].pageX - this.startX;
    this.setState({
      left: this.startLeft + this.moveX
    });
  }

  touchEnd(e) {
    if(this.isSlidering) return;
    const MOVE_DISTANCE = 50;
    let moveX = this.moveX, width = this.winWidth, end,
        pageNumber = Math.ceil(this.props.data.bookData.length / this.PAGE_COUNT),
        index = this.state.index;
    this.moveX = 0;
    if(moveX < 0) {
      if(moveX < -MOVE_DISTANCE) {
        if(index < pageNumber - 1) {
          end = -( index + 1) * width;
          this.setState({
            index: index + 1
          });
          this.playAnimate("left", end);
        } else {
          end = -index * width;
          this.playAnimate("right", end);
        }
      } else {
        end = -index * width;
        this.playAnimate("right", end);
      }
    } else {
      if(moveX > MOVE_DISTANCE) {
        if(index > 0) {
          end = -(index - 1) * width;
          this.setState({
            index: index - 1
          });
          this.playAnimate("right", end);
        } else {
          end = -index * width;
          this.playAnimate("left", end);
        }
      } else {
        end = -index * width;
        this.playAnimate("left", end);
      }
    }
  }

  slide(node) {
    node.addEventListener("touchstart", this.touchStart, false);
    node.addEventListener('touchmove', this.touchMove, false);
    node.addEventListener('touchend', this.touchEnd, false);
  }

  playAnimate(direction, end) {
    //direction 图片滚动的方向
    let speed, _this = this;
    let width = this.winWidth;
    const SPEED = 20, ANIMATE_TIME = 10;

    function animate() {
      let { left, index } = _this.state;
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
            left: -index * width
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
            left: -index * width
          });
          _this.isSlidering = false;
        }
      }
    }
    animate();
  }

  componentDidMount() {
    let shelf = findDOMNode(this.refs.shelf);
    this.slide(shelf);
  }

  componentWillUnmount() {
    let node = findDOMNode(this.refs.shelf);
    node.removeEventListener("touchstart", this.touchStart, false);
    node.removeEventListener('touchmove', this.touchMove, false);
    node.removeEventListener('touchend', this.touchEnd, false);
    window.clearTimeout(this.animate);
  }

  getBookShelfBox(page) {
    let { bookData } = this.props.data;
    return (
        <div className="bookWrap left" key={page} style={{width: this.winWidth}}>
          <div className="my-books clearfix">
            {
              bookData.map((item, i) => {
                if(i >= page * this.PAGE_COUNT && i < (page + 1) * this.PAGE_COUNT) {
                  return (
                    <Link to={item.href} key={i}>
                      <div className="book-img-container">
                        <img src={item.src} alt={item.bookName} className="book-img" title={item.bookName}/>
                      </div>
                      <div className="book-name">{item.bookName}</div>
                    </Link>
                  );
                }
              })
            }
          </div>
        </div>
    );
  }

  render() {
    let {bookData} = this.props.data, bookCodeLength, bookCode = [], bookBoxWidth,
        windowHeight = document.documentElement.clientHeight;
        bookCodeLength = Math.ceil(bookData.length / this.PAGE_COUNT);
        bookBoxWidth = this.winWidth * bookCodeLength;
    for (let i = 0; i < bookCodeLength; i++) {
      bookCode.push(this.getBookShelfBox(i));
    }

    return (
        <div className="BookShelf " style={{ height: windowHeight-190 }} ref="shelf">
          <div className="top-title">
            <div className="line"></div>
            <div className="title">我的书架</div>
          </div>
          <div className="book-box clearfix" style={{left: this.state.left, width: bookBoxWidth}}>
            {bookCode}
          </div>
          <div className="page-dots">
            <SliderDot index={this.state.index+1} nums={bookCodeLength}/>
          </div>
          <div className="books-bottom"></div>
        </div>
    );
  }
}

export default BookShelf;
