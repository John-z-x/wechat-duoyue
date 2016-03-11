//资源分类按键;
import React from 'react';

let typeName = [
  {"id": 1, "name":"全部"},
  {"id": 2, "name":"视频"},
  {"id": 3, "name":"音频"},
  {"id": 4, "name":"PDF"},
  {"id": 5, "name":"相册"}
];
class SourceClassify extends React.Component {
	 constructor(props) {
    super(props);
    this.state = {
      id: 1
    }
    this.changeNavStyle = this.changeNavStyle.bind(this);
  }
  
  changeNavStyle(id) {
    this.setState({
      id: id
    });
  }

	render() {
    
		return (
      <div  className="source-classify clearfix">
        {
        	typeName.map( (item, id) => {
            let classname = this.state.id === item.id ? "source-type-over" : "source-type";
            return (
              <div className={classname} key={id} onClick = { ()=> this.changeNavStyle(item.id) }>{item.name}</div>
            ) 
           })
        } 
      </div>
		);
	}
}

export default SourceClassify;
