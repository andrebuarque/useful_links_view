import React, { Component } from 'react';
import { Link } from 'react-router';
import '../styles.css';

import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import HeaderPage from './common/HeaderPage';
import CategoryService from '../services/CategoryService';

class Categories extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	rows: [],
	  	rowsSelected: [],
	  	btnEditDisabled: true,
	  	btnDeleteDisabled: true,
	  };

	  this.requestCategories();
	  this.onSelectRow = this.onSelectRow.bind(this);
	  this.handleClickEdit = this.handleClickEdit.bind(this);
	  this.handleDelete = this.handleDelete.bind(this);
	}

	requestCategories() {
		CategoryService.all().then(
	  	(response) => {
	  		this.setState({rows: response.data});
	  	}, (err) => {
	  		alert(`Ocorreu um erro: ${err.message}`);
	  	}
	  );
	}

	onSelectRow(row, isSelected, i) {
		let rowsSelected = this.state.rowsSelected;

		if (isSelected) {
			rowsSelected.push(row);
		} else {
			rowsSelected = rowsSelected.filter((item) => item.id !== row.id);
		}

		this.setState({ 
			rowsSelected: rowsSelected,
			btnEditDisabled: rowsSelected.length !== 1,
			btnDeleteDisabled: rowsSelected.length === 0
		});
	}

	handleClickEdit() {
		console.log(this.state.rowsSelected);
	}

	handleDelete(rows) {
		rows.forEach((id) => {
			CategoryService.delete(id).then(
		  	(response) => {
		  		
		  	}, (err) => {
		  		alert(`Ocorreu um erro ao remover o(s) registro(s): ${err.message}`);
		  	}
		  );
		});
	}

	render() {
		return (
			<div>
				<HeaderPage name="Categorias" />

	    	<div className="row">
	    		<div className="col-lg-12" style={{ margin: '0 2px 12px 0' }}>
	    			
	    			<Link to="categories/new"
	    						className="btn btn-primary" 
	    						style={{ marginRight: '5px' }}>
	    				<i className="fa fa-plus"></i> Novo registro
	    			</Link>

	    			<Link to={{ pathname: '/categories/edit', state: { registry: this.state.rowsSelected[0] } }}
	    						className="btn btn-info" 
	    						disabled={this.state.btnEditDisabled} 
	    						style={{ marginRight: '5px' }}>
	    				<i className="fa fa-edit"></i> Editar
	    			</Link>

	    		</div>
	    	</div>

	    	<div className="row">
	        <div className="col-lg-12">
	        	<BootstrapTable 
	        		data={this.state.rows} 
	        		options={{ onDeleteRow: this.handleDelete, deleteText: 'Remover' }}
	        		striped 
	        		hover 
	        		pagination 
	        		search 
	        		deleteRow
	        		selectRow={{ mode: 'checkbox', onSelect: this.onSelectRow} }>
				      <TableHeaderColumn isKey dataField='id'>ID</TableHeaderColumn>
				      <TableHeaderColumn dataField='name'>Nome</TableHeaderColumn>
					  </BootstrapTable>
	        </div>
	      </div>
      </div>
		);
	}
}

export default Categories;