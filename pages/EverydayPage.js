//每天列表
import React from 'react';
import { Link } from 'react-router';
import Cart from '../components/CartUIComponent/Cart';
import Slider from '../components/SliderUIComponent/Slider';

import EverydayContent from '../components/PageEveryDay/EverydayContent';
import EveryDayDates from '../components/PageEveryDay/EveryDayDates';

import withStyles from '../decorators/withStyles';
import styles from '../components/PageEveryDay/PageEveryDay.scss';

let everyData = [
  {"id":"1","src":"/imagesforarticle/6.png","title": "青春文学","desc":"这个测试这个测试这个测试这个测试这个测试这个测试这个测试这个测试","day":"三天前","peoplenum":"17"},
  {"id":"2","src":"/imagesforarticle/6.png","title": "职场进阶","desc":"这个测试这个测试这个测试这个测试这个测试这个测试这个测试这个测试","day":"四天前","peoplenum":"18"},
  {"id":"3","src":"/imagesforarticle/6.png","title": "经典文学","desc":"这个测试这个测试这个测试这个测试这个测试这个测试这个测试这个测试","day":"五天前","peoplenum":"19"},
  {"id":"4","src":"/imagesforarticle/6.png","title": "网络文学","desc":"这个测试这个测试这个测试这个测试这个测试这个测试这个测试这个测试","day":"六天前","peoplenum":"20"}
];

let EverydayData ={
  SliderList: [
    {"id": "1", "url": "images/fifth.jpg", "title": "长江出版社"},
    {"id": "2", "url": "images/sixth.jpg", "title": "哈尔冰出版社"},
  ]
};

@withStyles(styles)
class EverydayPage extends React.Component {
    render() {

      return(
        <div className="EverydayPage">
          <Slider data={EverydayData.SliderList}/>
         {
           everyData.map(function(everyday){
              return(
               <Link to={`/everyday/${everyday.id}`} key={everyday.id}>
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
          {this.props.children}
          <Cart />
        </div>
      )
    }
	}

export default EverydayPage;