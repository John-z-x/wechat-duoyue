import React, {PropTypes} from 'react';
import RecItem from './RecItem';

class RecList extends React.Component {
  render() {
    let {classname = "rec-title", data, title}  = this.props;
    return (
        <div className="RecList">
          <div className={classname}>{title}</div>
          <div>
            {
              data && data.map((ele, i) => {
                return (
                    <RecItem data={ele} key={i}/>
                );
              })
            }
          </div>
        </div>
    );
  }
}

RecList.propTypes = {
  data: PropTypes.array
};

export default RecList;