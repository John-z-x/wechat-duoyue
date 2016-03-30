import React from 'react';

class CommodityDetailCollection extends React.Component {
		constructor(props) {
		super(props);
		this.state = {

		}
		//this.activeNavigationLink = this.activeNavigationLink.bind(this);
	}

	componentDidMount() {
		this.setState({

		});
	}
	render() {
	  return(
	  	<div className="CommodityDetailCollection">
		    <div className="suggest">
          		<div className="suggest-relative">
                   相关推荐
    			</div>
			    <div className="goods-contain-box">
			      <div className="goods-box"  >
			        {
			            this.props.data.videoList.map((item) => {
			              return (
			               <div className="goods-item" key={item.id} >
					          <a href="">
					          	<img className="goods-item-img" src={item.Src} width="110" height="110" alt=""/>
					          </a>
					          <div className="goods-title">
					            {item.Desc}
					          </div>
			                </div>
                          )
                         })
                    }
      			   </div>
   				 </div>
   		    </div>
  		</div>
    
	  );
	}
}

export default CommodityDetailCollection;