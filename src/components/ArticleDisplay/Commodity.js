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
    let commodity_data = require("../../../assets/MockData/commodity_data.json");
    this.setState({commoditys:commodity_data});
    //$.ajax({
    //  url: "../../../assets/MockData/commodity_data.json",
    //  dataType: 'json',
    //  success: function(data) {
    //    console.log(data)
    //    this.setState({commoditys: data});
    //  }.bind(this),
    //  error: function(xhr) {
    //    console.log(xhr instanceof Array);
    //  }.bind(this)
    //})
  }

  render() {
    let color = this.props.color;
    let bgColor = color == "white" ? "white" : "#333";
    let fontColor = color == "white" ? "black" : "#ccc";
    let commoditys = this.state.commoditys;
    let itemNodes = commoditys.map((items) => {
        return (
          <CommodityItem data={items}  id={items.id} key={items.id}/>
        )
    });
    return (
      <ul className="Commodity" key={"y"} style={{backgroundColor: bgColor, color: fontColor}}>
        {itemNodes}
      </ul>
    );
  }
}

export default Commodity;