import React from 'react';
import { Link } from 'react-router';

class BookInfo extends React.Component {
	render() {
    let { data } = this.props;
		return(
			<div className="BookInfo">
				<div className="book-cover">
          <div className="book-cover-container">
            <img src={data.bookPic} alt="书籍封面" title="书籍封面"/>
          </div>
	    	</div>
	    	<div className="book-info">
	    		<div className="book-title">{data.title}</div>
	    		<div className="sell-price">￥ {data.price}</div>
	    		<div className="button-area">
            <Link to='/confirmorder' className="book-buy">
              <span className="book-buy-icon"/>
              <div className="icon-box-title">购买</div>
            </Link>
            <Link to={`/danpin/bookconsult/${data.id}`} className="book-consult">
              <span className="book-consult-icon"/>
              <div className="icon-box-title">客服</div>
            </Link>
        	</div>
        	<div className="book-desc">
            <div className="list-box">
            	<span className="book-desc-title">图书简介</span>
              <div className="book-desc-content">{data.dtitle}</div>
            </div>
        		<div className="list-box">
	            <Link to={`/danpin/bookread/${data.id}`} className="book-read-btn">
	                在线阅读 <span>￥{data.ebookPrice}</span>
	            </Link>
							<Link to={`/danpin/booksource/${data.id}`} className="book-read-btn">
                  <span>配套资源</span>
              </Link>
	          </div>   
        		<div className="list-box">
            	<span className="list-icon"/>
            	<span className="book-list-title">目录摘要</span>
							{data.bookCataLogTreeHTML}
            </div>
        		<div className="list-box">
            	<span className="detail-icon"/>
            	<span className="book-list-title">图书详情</span>
            	<div className="book-detail-content">{data.desc}</div>
            </div>
        		<div className="list-box">
            	<span className="pub-icon"/>
            	<span className="book-list-title">出版信息</span>
            	<div className="book-detail-content">
            	<div className="pub-title">作/译者：<span>{data.author}</span></div>
            	<div className="pub-title">出版社： <span>{data.publishHouse}</span></div>
            	<div className="pub-title">出版时间：<span>{data.publishDate}</span></div>
            	<div className="pub-title">ISBN：<span>{data.isbn}</span></div>
            	<div className="pub-title">ISBN：<span>{data.isbn}</span></div>
            	</div>
            </div>    	
            <div className="book-buy-btn">加入购物车</div>         
        	</div>
        </div>
	    </div>
		);
	}
}

export default BookInfo;
// {
// 	listData.map((list,i) => {
// 		return (
// 				<div className="list-single-title" key={i}>{list}</div>
// 		);
// 	})
// }