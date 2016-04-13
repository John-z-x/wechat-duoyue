import React from 'react';

let defaultClass = {
  "Favor": "Favor",
  "noFavor": "noFavor"
}

class CollectButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isFavor: false
    }
    this.toggleFavor = this.toggleFavor.bind(this);
  }

  componentWillMount() {
    if(this.props.isFovored) {
      this.setState({
        isFavor: true
      });
    }
  }

  toggleFavor(event) {
    event.stopPropagation();
    this.setState({
      isFavor: !this.state.isFavor
    });
    this.props.onFavorChange && this.props.onFavorChange(this.state.isFavor);
  }

  render() {
    let imgsClass = this.props.imgsClass , classnames, onClass, notonClass;
    onClass = imgsClass ? defaultClass.Favor +" "+imgsClass.Favor : defaultClass.Favor ;
    notonClass = imgsClass ? defaultClass.noFavor + " " +imgsClass.noFavor : defaultClass.noFavor;
    classnames = this.state.isFavor ? onClass : notonClass ;
    return (
      <span className={"CollectButton head-btn right " + classnames } onClick={this.toggleFavor}></span>
    );
  }
}

export default CollectButton;