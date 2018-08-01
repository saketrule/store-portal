import React, { Component } from 'react';
import HomePage from '../pages/HomePage.js';
import Billings from '../pages/Billings.js';
import Analytics from '../pages/Analytics.js';
import Inventory from '../pages/Inventory.js';
import {
	Route
} from 'react-router-dom';


class BodyComponent extends Component {
  render() {
    return (
	      <div id="body_container">
	      	<Route exact path='/' component={HomePage} />
			<Route exact path='/billings' component={Billings} />
			<Route exact path='/analytics' component={Analytics} />
			<Route exact path='/inventory' component={Inventory} />
	      </div>
    );
  }
}

export default BodyComponent;
