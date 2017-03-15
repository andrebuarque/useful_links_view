import React, { Component } from 'react';
import '../../styles.css';

class HeaderPage extends Component {
	render() {
		const { name, loading } = this.props;
		return (
			<div className="row">
        <div className="col-lg-12">
          <h1 className="page-header">
          	{name}&nbsp; 
          	{loading ? <img src="default.gif" role="presentation" /> : null}
          </h1>
        </div>
    	</div>
		);
	}
}

HeaderPage.defaultProps = {
  loading: false
};

export default HeaderPage;