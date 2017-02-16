import React, { Component } from 'react';
import '../../styles.css';

import NavbarLogo from './NavbarLogo';
import NavbarTopLinks from './NavbarTopLinks';
import Sidebar from './Sidebar';

class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-default navbar-static-top" role="navigation" style={{'marginBottom': 0}}>
				<NavbarLogo />
				<NavbarTopLinks />
				<Sidebar />
			</nav>
		);
	}
}

export default Navbar;