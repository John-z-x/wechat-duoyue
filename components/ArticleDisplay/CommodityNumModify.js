import React from 'react'

//商品加减
class CommoditysNumModify extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: this.props.num,
    }
  }
  modifyNum() {
    var type = event.target.innerHTML, num = this.state.num;
    //提交后台并返回成功后继续。。
    //console.log(type)
    if (type.indexOf("+") > -1) {
      this.setState({num: parseInt(num, 10) + 1});
    }else if (num > 1){
      this.setState({num: parseInt(num, 10) - 1})
    }
  }
  
  render() {
    return (
      <div className="classify-price right">
        <a className="commoditys-classify left change-item-number" onClick={this.modifyNum.bind(this)}> - </a>
        <a className="commoditys-classify left">{this.state.num}</a>
        <a className="commoditys-classify left change-item-number" onClick={this.modifyNum.bind(this)}> + </a>
      </div>
    )
  }
}

export default CommoditysNumModify;
