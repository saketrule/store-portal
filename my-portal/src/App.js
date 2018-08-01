import React, { Component } from 'react';

// Importing components
import MenuComponent from './components/layout/MenuComponent';
import BodyComponent from './components/layout/BodyComponent';
import { 
	BrowserRouter as Router,
	Route
  } from 'react-router-dom';

import './assets/css/default.css';

class App extends Component {
  render() {
    return (
    	<Router>
	      <div className="App">
						<MenuComponent />
						<BodyComponent />
	      </div>
      </Router>
    );
  }
}

export default App;
