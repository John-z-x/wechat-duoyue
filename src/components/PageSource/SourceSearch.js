//资源搜索
import React from 'react';

class SourceSearch extends React.Component {
	render() {
		return(
			<div className="source-search">
				<form>
			    <div className="search-form">
			    	<div className="search-box clearfix">
			        <div className="search-input left">
			          <input type="text" name="keyword" placeholder="请输入关键字"/>
			        </div>
			        <div className="tosearch right">
				  			搜索
			        </div>
			      </div>
			    </div>
			    <div className="submit"><input type="submit"/></div>
			  </form>
			</div>
		);
	}
}

export default SourceSearch;