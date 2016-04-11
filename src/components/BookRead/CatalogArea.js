import React from 'react';

import withStyles from '../../decorators/withStyles';
import styles from './CatalogArea.scss';

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

  render(){
    let chapter = this.props.chapter || 1;
    let chaptersCode = dataArray.map( (item, index) => {
      let  chapterClassName = "showIndex";
      if(chapter == index) {
        chapterClassName = "showIndex over"
      }
      return (
        <a key={index} className="showIndexLink">
          <div className={chapterClassName} >{item.title}</div>
        </a>
      );
    });
    return (
        <div className="CatalogArea">
          <header className="catalog-header">
            <span className="articleIcon-continue" onClick={this.props.onReturn}>续读</span>
          </header>
          <div className="catalog">
            <div className="articleIndex" >
            {chaptersCode}
            </div>
          </div>
        </div>
      );
    }
  }
  export default CatalogArea;