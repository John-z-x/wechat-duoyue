import React from 'react';
import { Link } from 'react-router';

class BookInfo extends React.Component {
	render() {
		return(
			<div>
				<div className="book-cover" onClick={this.handleClick}>
					<img src={this.props.data.bookData.coverUrl} alt="书籍封面" />
	    	</div>
	    	<div className="book-info">
	    		<div className="book-title">{this.props.data.bookData.bookTitle}</div>
	    		<div className="sell-price">￥&nbsp;{this.props.data.bookData.sellPrice}</div>
	    		<div className="button-area">

		        <div>
		          <table>
		            <tbody>
			            <tr>
			              <td>
			              	<Link to={`/danpin/booksource/${this.props.data.bookData.id}`} className="icon-box">
		                    <div className="book-buy-icon"></div>
		                  	<div className="icon-box-title">购买</div>
			                </Link>
			              </td>
			              <td>
			              	<Link to={`/danpin/bookconsult/${this.props.data.bookData.id}`} className="icon-box">
				              	<div className="book-consult-icon"></div>
			              		<div className="icon-box-title">客服</div>
			                </Link>
			              </td>
			            </tr>
		          	</tbody>
		          </table>
		        </div>
        	</div>

        	<div className="book-desc">
            <div className="book-desc-box">
            	<div className="book-desc-title">图书简介</div>
              <div className="book-desc-content">{this.props.data.bookData.bookDesc}</div>
            </div>
        	</div>

        	<div className="book-desc">
        		<div className="book-read-box">
	            <div className="book-read-btn">
	                在线阅读&nbsp;<span>￥{this.props.data.bookData.readPrice}</span>
	            </div>

							<Link to={`/danpin/booksource/${this.props.data.bookData.id}`} className="book-read-btn"><span>配套资源</span></Link>
	          </div>   
        	</div>

        	<div className="book-desc">
        		<div className="list-box">
            	<div className="list-icon"></div>
            	<div className="book-list-title">目录摘要</div>
            	{
            		this.props.data.listData.map(function(list,i) {
            			return (
            				<div className="list-single-title" key={i}>{list}</div>
            			);
            		})
            	}
            </div>
        	</div>

        	<div className="book-desc">
        		<div className="list-box">
            	<div className="detail-icon"></div>
            	<div className="book-list-title">图书详情</div>
            	<div className="book-detail-content">{this.props.data.bookData.bookDetials}</div>
            </div>
        	</div>

        	<div className="book-desc">
        		<div className="list-box">
            	<div className="pub-icon"></div>
            	<div className="book-list-title">出版信息</div>
            	<div className="book-detail-content">
            	<div className="pub-title">作/译者：{this.props.data.pubInfo.writer}</div>
            	<div className="pub-title">出版社：{this.props.data.pubInfo.publisher}</div>
            	<div className="pub-title">出版时间：{this.props.data.pubInfo.pubTime}</div>
            	<div className="pub-title">ISBN：{this.props.data.pubInfo.pubCode}</div>
            	</div>
            </div>
        	</div>

        	<div className="book-desc">
            <div className="book-buy-box">            	
              <div className="book-buy-btn">加入购物车</div>          
            </div>
        	</div>

        </div>
	    </div>
		);
	}
}

export default BookInfo;