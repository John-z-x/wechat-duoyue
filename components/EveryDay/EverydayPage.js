//每天列表
import React from 'react';
import ReactDOM from 'react-dom';
import EveryDayTitle from './EveryDayTitle.js';
import ListContents from './ListContents.js';

class EverydayPage extends React.Component {
    render() {
      let everydata = [
        {"id":"1","src":"/imagesforarticle/6.png","title": "青春文学","desc":"这个测试这个测试这个测试这个测试这个测试这个测试这个测试这个测试","day":"三天前","peoplenum":"17"},
        {"id":"2","src":"/imagesforarticle/6.png","title": "职场进阶","desc":"这个测试这个测试这个测试这个测试这个测试这个测试这个测试这个测试","day":"四天前","peoplenum":"18"},
        {"id":"3","src":"/imagesforarticle/6.png","title": "经典文学","desc":"这个测试这个测试这个测试这个测试这个测试这个测试这个测试这个测试","day":"五天前","peoplenum":"19"},
        {"id":"4","src":"/imagesforarticle/6.png","title": "网络文学","desc":"这个测试这个测试这个测试这个测试这个测试这个测试这个测试这个测试","day":"六天前","peoplenum":"20"}
    ];
    return(
      <div>
			 {
          everydata.map(function(list){
            return(
              <div className="everyday-box" key={list.id}>
		            <EveryDayTitle />
		            <ListContents list={list}/>
			        </div>
           );
          })
        }
      </div>
    )
  }
	}

export default EverydayPage;