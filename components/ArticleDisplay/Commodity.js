import React from 'react';
import $ from 'jquery';
import CommodityItem from './CommodityItem';

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
      url: "/MockData/commodity_data.js",
      dataType: 'json',
      success: function(data) {
        this.setState({commoditys: data});
      }.bind(this),
      error: function(xhr) {
        console.log(xhr instanceof Array);
      }.bind(this)
    })
  }

  render() {
    let color = this.props.color;
    let bgColor = color == "white" ? "white" : "#333";
    let fontColor = color == "white" ? "black" : "#ccc";
    let commoditys = this.state.commoditys;
    let itemNodes = commoditys.map(function(items) {
        return (
          <CommodityItem data={items}  id={items.id} key={items.id}/>
        )
    });
    return (
      <ul className="cart-commoditys" key={"y"} style={{backgroundColor: bgColor, color: fontColor}}>
        {itemNodes}
      </ul>
    );
  }
}

export default Commodity;