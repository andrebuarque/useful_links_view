import React, { Component } from 'react';
import { Link } from 'react-router';

import '../styles.css';

class CategoriesForm extends Component {
	render() {
		const { handleSubmit, handleChangeName, nameValue } = this.props;

		return (
			<div className="row">
        <div className="col-lg-12">
        	<form role="form" onSubmit={handleSubmit}>
        		<div className="form-group">
              <label>Nome</label>
              <input className="form-control" ref="inputName" value={nameValue} onChange={handleChangeName} />
            </div>
            <button type="submit" className="btn btn-success" style={{ marginRight: '5px' }}>Cadastrar</button>
            <Link to="/categories" className="btn btn-primary">
            	<i className="fa fa-arrow-left"></i> Voltar
            </Link>
        	</form>
        </div>
			</div>
		);
	}
}

export default CategoriesForm;