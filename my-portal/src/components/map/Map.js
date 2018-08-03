import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch from '../../p5/sketch';

import '../../assets/css/sketch.css';

class Map extends Component {
  render() {
    return (
    	<div id="sketch-container">
    		<P5Wrapper sketch={sketch} />
		</div>
    );
  }
}

export default Map;
