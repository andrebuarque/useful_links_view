import React, { Component } from 'react';
import '../styles.css';

import HeaderPage from './common/HeaderPage';

class Links extends Component {
	render() {
		return (
			<div>
				<HeaderPage name="Links" />

	    	<div className="row">
	    		<div className="col-lg-12" style={{ margin: '0 2px 12px 0' }}>
	    			<button type="button" className="btn btn-primary">
	    				<i className="fa fa-plus"></i> Novo registro
	    			</button>
	    		</div>
	    	</div>

	    	<div className="row">
	        <div className="col-lg-12">

	        </div>
	      </div>
      </div>
		);
	}
}

export default Links;