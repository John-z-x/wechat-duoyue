import React from 'react';
import $ from 'jquery';
import CommoditysItem from './CommoditysItem.js';

//相关商品
class Commodity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "commoditys": [],
    }
  }
 
  componentDidMount() {
    this.loadGoodsList();
  }

  loadGoodsList() {
    $.ajax({
      url: "/components/ArticleDisplay/commodity_data.js",
      dataType: 'json',
      success: function(data) {
        this.setState({commoditys: data});
      }.bind(this),
      error: function(xhr) {
        console.log(xhr instanceof Array);
      }.bind(this),
    })
  }

  render() {
    var commoditys = this.state.commoditys;
    var itemNodes = commoditys.map(function(items) {
        return (
          <CommoditysItem data={items}  id={items.id} key={items.id}/>
        )
    });
    return (
      <ul className="cart-commoditys" key={"y"}>
        {itemNodes}
      </ul>
    );
  }
}

export default Commodity;