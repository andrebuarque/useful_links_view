import React, { Component } from 'react';
import '../../styles.css';

class NavbarLogo extends Component {
	render() {
		return (
			<div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="#">Coleção de Links Úteis</a>
    	</div>
		);
	}
}

export default NavbarLogo;