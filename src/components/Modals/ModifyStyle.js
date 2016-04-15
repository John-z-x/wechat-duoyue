import React from 'react';

////import withstyles from '../../decorators/withStyles';
import styles from './ModifyStyle.scss';

const color = {
  white: {
    fontcolor: "#333",
    bgcolor: "#fff",
    bordercolor: "#ddd",
    topbordercolor: "#ddd",
    blackbordercolor: "rgb(221, 221, 221)",
    whitebackcolor: "#fff",
    whitebordercolor: "rgb(194, 147, 100)",
    whitecolor: "#333",
    blackcolor: "#fff",
    blackbackcolor: "#333"
  },
  black: {
    fontcolor: "rgb(136, 136, 136)",
    bgcolor: "black",
    bordercolor: "#333",
    topbordercolor: "#666",
    blackbordercolor: "rgb(194, 147, 100)",
    whitebackcolor: "#fff",
    whitebordercolor: "#333",
    whitecolor: "#333",
    blackcolor: "rgb(136, 136, 136)",
    blackbackcolor: "rgb(30, 30, 30)"
  }
};

//@withStyles(styles)
class ModifyStyle extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      color: "white"
    };
    this.onStyleChange = this.onStyleChange.bind(this);
  }

  onStyleChange(e) {
    let type = e.target.getAttribute("type"),
        styleClass = e.target.getAttribute("class"),
        onModifyClick = this.props.onModifyClick;
    e.stopPropagation();
    this.setState({
      [type]: styleClass
    });
    onModifyClick(styleClass);
  }

  render() {
    let style = color[this.state.color];
    let topClass = "top-"+this.state.color;
    return (
      <section className="ModifyStyle" style={{backgroundColor: style.bgcolor, border: "1px solid "+style.bordercolor}}>
        <span className={topClass}></span>
        <div className="top" style={{color: style.fontcolor, borderBottom: "1px solid "+style.topbordercolor}}>
          <span className="small" type="fontSize" onClick={this.onStyleChange} style={{borderRight: "1px solid "+ style.topbordercolor}}>A-</span>
          <span className="big" type="fontSize" onClick={this.onStyleChange}>A+</span>
        </div>
        <div className="bottom">
          <span className="white" type="color" onClick={this.onStyleChange} style={{borderColor: style.whitebordercolor, backgroundColor: style.whitebackcolor, color: style.whitecolor}}>A</span>
          <span className="black" type="color" onClick={this.onStyleChange} style={{borderColor: style.blackbordercolor, backgroundColor: style.blackbackcolor, color: style.blackcolor}}>A</span>
        </div>
      </section>
    );
  }
}

export default ModifyStyle;