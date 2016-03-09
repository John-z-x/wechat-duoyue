import React from 'react';

import Cart from '../components/CartUIComponent/Cart';
import Slider from '../components/SliderUIComponent/Slider';

let sourceData = {
	SliderList: [
		{"id": "1", "url": "images/fourth.jpg", "title": "长江出版社"},
	]
}

class SourcePage extends React.Component {
	render() {
		return (
      <div className="SourcePage">
				<Slider data={sourceData.SliderList}/>
				<h2>TODO</h2>
				<h3>Source Page</h3>
				<Cart />
      </div>
		);
	}
}

export default SourcePage;