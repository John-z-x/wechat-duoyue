import React from 'react';

import withStyles from '../../decorators/withStyles';
import styles from './CatalogArea.scss';

import MenuHeader from './MenuHeader';

let dataArray = [
  {'title':'第一章 的卡卡的就','id':1},
  {'title':'第一章 的卡卡的就','id':2},
  {'title':'第一章 的卡卡的就','id':3},
  {'title':'第一章 的卡卡的就','id':4},
  {'title':'第一章 的卡卡的就','id':5},
  {'title':'第一章 的卡卡的就','id':6},
  {'title':'第一章 的卡卡的就','id':7},
  {'title':'第一章 的卡卡的就','id':8},
  {'title':'第一章 的卡卡的就','id':9},
  {'title':'第一章 的卡卡的就','id':10},
  {'title':'第一章 的卡卡的就','id':11},
  {'title':'第一章 的卡卡的就','id':12},
  {'title':'第一章 的卡卡的就','id':13},
  {'title':'第一章 的卡卡的就','id':14},
  {'title':'第一章 的卡卡的就','id':15}
];

@withStyles(styles)
class CatalogArea extends React.Component{
  componentDidMount(){
    let aArray = document.getElementsByClassName('showIndexLink');
    for(var i=0;i<aArray.length;i++){
     aArray[i].style.color = '#333';
    }
    document.getElementById('showIndex5').style.color='#97d7c0';
  }
  render(){
    let Link = dataArray.map(function(item){
    return (
      <a href="" key={item.id} id={'showIndex'+item.id} className="showIndexLink">
        <div className="showIndex" >{item.title}</div>
      </a>
      );
    })
    return (
        <div id="catalog_area" className="CatalogArea"> 
          <MenuHeader/>
          <div className="catalog">
              <div className="articleIndex" id="articleIndex">
              {Link}
              </div>
          </div>
        </div>
      );
    }
  }
  export default CatalogArea;