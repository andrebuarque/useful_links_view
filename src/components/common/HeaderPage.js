import React, { Component } from 'react';
import '../../styles.css';

class HeaderPage extends Component {
	render() {
		return (
			<div className="row">
        <div className="col-lg-12">
          <h1 className="page-header">{this.props.name}</h1>
        </div>
    	</div>
		);
	}
}

export default HeaderPage;