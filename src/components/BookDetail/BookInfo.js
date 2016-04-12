import React from 'react';
import { Link } from 'react-router';

class BookInfo extends React.Component {
	render() {
    let { bookData,listData, pubInfo } = this.props.data;
		return(
			<div className="BookInfo">
				<div className="book-cover">
          <div className="book-cover-container">
            <img src={bookData.coverUrl} alt="书籍封面" title="书籍封面"/>
          </div>
	    	</div>
	    	<div className="book-info">
	    		<div className="book-title">{bookData.bookTitle}</div>
	    		<div className="sell-price">￥ {bookData.sellPrice}</div>
	    		<div className="button-area">
            <Link to='/confirmorder' className="book-buy">
              <span className="book-buy-icon"></span>
              <div className="icon-box-title">购买</div>
            </Link>
            <Link to={`/danpin/bookconsult/${bookData.id}`} className="book-consult">
              <span className="book-consult-icon"></span>
              <div className="icon-box-title">客服</div>
            </Link>
        	</div>
        	<div className="book-desc">
            <div className="list-box">
            	<span className="book-desc-title">图书简介</span>
              <div className="book-desc-content">{bookData.bookDesc}</div>
            </div>
        		<div className="list-box">
	            <Link to={`/danpin/bookread/${bookData.id}`} className="book-read-btn">
	                在线阅读 <span>￥{bookData.readPrice}</span>
	            </Link>
							<Link to={`/danpin/booksource/${bookData.id}`} className="book-read-btn">
                  <span>配套资源</span>
              </Link>
	          </div>   
        		<div className="list-box">
            	<span className="list-icon"></span>
            	<span className="book-list-title">目录摘要</span>
            	{
            		listData.map((list,i) => {
            			return (
            				<div className="list-single-title" key={i}>{list}</div>
            			);
            		})
            	}
            </div>
        		<div className="list-box">
            	<span className="detail-icon"></span>
            	<span className="book-list-title">图书详情</span>
            	<div className="book-detail-content">{bookData.bookDetials}</div>
            </div>
        		<div className="list-box">
            	<span className="pub-icon"></span>
            	<span className="book-list-title">出版信息</span>
            	<div className="book-detail-content">
            	<div className="pub-title">作/译者：<span>{pubInfo.writer}</span></div>
            	<div className="pub-title">出版社： <span>{pubInfo.publisher}</span></div>
            	<div className="pub-title">出版时间：<span>{pubInfo.pubTime}</span></div>
            	<div className="pub-title">ISBN：<span>{pubInfo.pubCode}</span></div>
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