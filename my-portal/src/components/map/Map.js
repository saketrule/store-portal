import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch from '../../p5/sketch'

class Map extends Component {
  render() {
    return (
    	<P5Wrapper sketch={sketch} />
    );
  }
}

export default Map;