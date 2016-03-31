import React from 'react'

//商品加减
class CommoditysNumModify extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 1
    }
  }

  modifyNum(event) {
    let type = event.target.innerHTML, num = this.state.num;
    if (type.indexOf("+") > -1) {
      this.setState({num: parseInt(num, 10) + 1});
    }else if (num > 1){
      this.setState({num: parseInt(num, 10) - 1})
    }
  }

  getNum() {
    return this.state.num;
  }
  
  render() {
    return (
      <div className="CommoditysNumModify  right">
        <a className="commoditys-classify left " onClick={this.modifyNum.bind(this)}> - </a>
        <a className="commoditys-classify left">{this.state.num}</a>
        <a className="commoditys-classify left " onClick={this.modifyNum.bind(this)}> + </a>
      </div>
    )
  }
}

export default CommoditysNumModify;
