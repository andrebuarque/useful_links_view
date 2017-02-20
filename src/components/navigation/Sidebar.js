import React, { Component } from 'react';
import '../../styles.css';
import { Link } from 'react-router';

class Sidebar extends Component {
  constructor(props) {
    super(props);
  
    this.state = {};
  }

	render() {
		return (
			<div className="navbar-default sidebar" role="navigation">
          <div className="sidebar-nav navbar-collapse">
              <ul className="nav" id="side-menu">
                  <li>
                      <Link to="/" onClick={this.clickMenu}>
                        <i className="fa fa-link fa-fw"></i> Links
                      </Link>
                  </li>
                  <li>
                      <Link to="/tags">
                        <i className="fa fa-tag fa-fw"></i> Tags
                      </Link>
                  </li>
                  <li>
                      <Link to="/categories">
                        <i className="fa fa-list fa-fw"></i> Categorias
                      </Link>
                  </li>
              </ul>
          </div>
      </div>
		);
	}
}

export default Sidebar;