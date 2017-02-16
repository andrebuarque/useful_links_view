import React, { Component } from 'react';
import '../../styles.css';

class NavbarTopLinks extends Component {
	render() {
		return (
			<ul className="nav navbar-top-links navbar-right">
				<li className="dropdown">
					<a className="dropdown-toggle" data-toggle="dropdown" href="#">
						<i className="fa fa-user fa-fw"></i> <i className="fa fa-caret-down"></i>
					</a>
					<ul className="dropdown-menu dropdown-user">
						<li>
							<a href="#"><i className="fa fa-user fa-fw"></i> User Profile</a>
						</li>
						<li>
							<a href="#"><i className="fa fa-gear fa-fw"></i> Settings</a>
						</li>
						<li className="divider"></li>
						<li>
							<a href="login.html"><i className="fa fa-sign-out fa-fw"></i> Logout</a>
						</li>
					</ul>
				</li>
			</ul>
		);
	}
}

export default NavbarTopLinks;