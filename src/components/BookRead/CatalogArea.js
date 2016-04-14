import React from 'react';

import withStyles from '../../decorators/withStyles';
import styles from './CatalogArea.scss';

let dataArray = [
  {'title':'第一章 的卡卡的就','id':1},
  {'title':'第二章 的卡卡的就','id':2},
  {'title':'第三章 的卡卡的就','id':3},
  {'title':'第四章 的卡卡的就','id':4},
  {'title':'第五章 的卡卡的就','id':5},
  {'title':'第六章 的卡卡的就','id':6},
  {'title':'第七章 的卡卡的就','id':7},
  {'title':'第八章 的卡卡的就','id':8},
  {'title':'第九章 的卡卡的就','id':9},
  {'title':'第十章 的卡卡的就','id':10},
  {'title':'第十一章 的卡卡的就','id':11},
  {'title':'第十二章 的卡卡的就','id':12},
  {'title':'第十三章 的卡卡的就','id':13},
  {'title':'第十四章 的卡卡的就','id':14},
  {'title':'第十五章 的卡卡的就','id':15}
];

@withStyles(styles)
class CatalogArea extends React.Component{

  render(){
    const {chapter} = this.props;
    let chaptersCode = dataArray.map( (item, index) => {
      let  chapterClassName = "showIndex";
      if(chapter == ( index + 1 )) {
        chapterClassName = "showIndex over"
      }
      return (
        <a key={(index + 1)} className="showIndexLink">
          <div className={chapterClassName} onClick={()=>this.props.chapterChange(item.id)} >{item.title}</div>
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