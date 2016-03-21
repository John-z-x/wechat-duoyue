//每天列表
import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import Slider from '../SliderUIComponent/Slider';

import EverydayContent from './EverydayContent';
import EveryDayDates from './EveryDayDates';

import withStyles from '../../decorators/withStyles';
import styles from './PageEveryDay.scss';

let everyData = [
  {"id":"1","src":"/imagesforarticle/6.png","title": "青春文学","desc":"这个测试这个测试这个测试这个测试这个测试这个测试这个测试这个测试","day":"三天前","peoplenum":"17"},
  {"id":"2","src":"/imagesforarticle/6.png","title": "职场进阶","desc":"这个测试这个测试这个测试这个测试这个测试这个测试这个测试这个测试","day":"四天前","peoplenum":"18"},
  {"id":"3","src":"/imagesforarticle/6.png","title": "经典文学","desc":"这个测试这个测试这个测试这个测试这个测试这个测试这个测试这个测试","day":"五天前","peoplenum":"19"},
  {"id":"4","src":"/imagesforarticle/6.png","title": "网络文学","desc":"这个测试这个测试这个测试这个测试这个测试这个测试这个测试这个测试","day":"六天前","peoplenum":"20"}
];

let EverydayData ={
  SliderList: [
    {"id": "1", "url": "/images/fifth.jpg", "title": ""},
    {"id": "2", "url": "/images/sixth.jpg", "title": ""},
  ]
};

@withStyles(styles)
class EverydayPageHome extends React.Component {
  static propTypes = {
    children: PropTypes.any
  };
  render() {
    return(

        <div className="EverydayPage">

          <Slider data={EverydayData.SliderList}/>
          {
            everyData.map(function(everyday){
              return(
                  <Link to={`/everyday/${everyday.id}/display`} key={everyday.id}>
                    <div className="everyday-box">
                      <div className="item-title">
                        <img src="/imagesforarticle/null.gif" className="juhe-icon-wenzhang"/>
                        · 文章 ·
                      </div>
                      <EverydayContent data={everyday}/>
                      <EveryDayDates data={everyday}/>
                    </div>
                  </Link>
              );
            })
          }
        </div>
    )
  }
}

export default EverydayPageHome;