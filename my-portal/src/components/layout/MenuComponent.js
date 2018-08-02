import React, { Component } from 'react';
// Later I will be using saas
// absolute path not working for now
import '../../assets/css/menu-component.css';
import {
	Link
} from 'react-router-dom';

class MenuComponent extends Component {
  render() {
    return (
      <div id="menu_container">
      	<nav>
	      <ul id="menu">
          <li>
	        <Link to="/Billings" className="menu-link">
	        	Billings 
        	</Link>
          </li>
          <li>
        	<Link to="/" className="menu-link">
	        	HomePage
        	</Link>
          </li>
          <li>
        	<Link to="/analytics" className="menu-link">
	        	Analytics
        	</Link>
          </li>
          <li>
        	<Link to="/inventory" className="menu-link">
	        	Inventory
        	</Link>
          </li>
	      </ul>
		</nav>
      </div>
    );
  }
}

export default MenuComponent;
