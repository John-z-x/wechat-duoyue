import React from 'react';

////import withstyles from '../../decorators/withStyles';
import styles from './BookDetail.scss';

import CommonHeader from '../HeaderComponents/CommonHeader';
import ReturnButton from '../HeaderComponents/ReturnButton';
import CollectButton from '../HeaderComponents/CollectButton';

import Alert from '../Modals/Alert';

import BookInfo from './BookInfo';
import RecList from './RecList';
import ToDanpin from "./ToDanpin";

const Recdata = [
  {"id": "1", "imgUrl":  require('../../../assets/images/pic1.jpg'), "href": "/danpin/bookbuy/6227", "title": "落花时节又逢君", "price": "28.00"},
  {"id": "2", "imgUrl":  require('../../../assets/images/pic3.jpg'), "href": "/danpin/bookbuy/6227", "title": "三救姻缘", "price": "25.00"},
  {"id": "3", "imgUrl":  require('../../../assets/images/pic2.jpg'), "href": "/danpin/bookbuy/6227", "title": "成仙了，就别再来找我", "price": "20.00"}
];

const Bookdata = {
  bookData: {
    "id": "1905", "coverUrl":  require('../../../assets/images/bookCover.jpg'), "bookTitle": "他来了，请闭眼", "sellPrice": "31.50", "readPrice": "6.20", "bookDesc": "对于大神薄小猫，无论是他的才华横溢、睿智过人，还是他的傲娇幼稚、不可一世，还有他那些可爱又自恋的思维，以及高贵而正直的人格，无一不是我的萌点。但是最令我动容的，是大神对瑶瑶那毫无保留的、纯真热烈的、至死不渝的爱。", "bookDetials": "当你拥有了一个聪明、傲娇又忠犬的男友……约会时，他说：“我对这种事没兴趣。不过如果你每十分钟亲我一下，我可以陪你做任何无聊的事。”吃醋时，他说：“与我相比，这个男人从头到脚写满愚蠢。唯一不蠢的地方，是他也知道你是个好女人。”激情时，他说：“虽然我没有经验，但资质和领悟力超群。顺便提一句，我的观察力也很好。”求婚时，他说：“言语无法表达。如果一定要概括，那就是——我爱你，以我全部的智慧和生命。”"
  },
  pubInfo: {
    "writer": "丁墨", "publisher": "百花洲文艺出版社", "pubTime": "2014.07.15", "pubCode": "9787550009899"
  },
  listData: [
    "第一章  古怪男人","第二章  熏然其人","第三章  鱼鱼鱼鱼","第四章  你好再见","第五章  雨夜邂逅","第六章  他的身份","第七章  靳言大神","第八章  靳言所爱","第九章  掌心初吻","第十章  拨云见日","第十一章  初见端倪","第十二章  潮起潮落","第十三章  谢谢再见","第十四章  朝花夕拾","第十五章  同居天下","第十六章  先生你好","第十七章  鲜花离分","第十八章  粉墨登场","第十九章  总监好酷","第二十章  妈妈再见","第二十一章  肮脏天堂","第二十二章  我所欲也","第二十三章  大戏开锣","第二十四章  v章"
  ]
};

const alertContent = {
  "img": "http://www.duoyue.me/wechat/1018/3021/images/top/save.png",
  "content": "收藏成功"
};

////@withStyles(styles)
class BookDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sucessModal: false
    }
  }
  //下载功能
  onFavorChange() {
    this.setState({
      successModal: true
    });
    this.sucessModalTimer = setTimeout( ()=> {
      this.setState({
        successModal: false
      })
    }, 2000 )
  }

  componentWillUnmount() {
    window.clearTimeout(this.successModalTimer);
  }

  render() {
    return (
        <div className="BookDetail">
          <CommonHeader>
            <ReturnButton />
            <CollectButton onFavorChange={this.onFavorChange.bind(this)}/>
          </CommonHeader>
          <BookInfo data={Bookdata}/>
          <RecList title="相关图书" data={Recdata}/>
          <div className="bottom-blank"></div>
          <ToDanpin title="书城"/>
          {
            this.state.sucessModal &&
              <Alert content={alertContent} />
          }
        </div>
    );
  }
};

export default BookDetail;