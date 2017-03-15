import React, { Component } from 'react';
import { Link } from 'react-router';
import '../styles.css';

import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import HeaderPage from './common/HeaderPage';
import LinkService from '../services/LinkService';

class Links extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	rows: [],
	  	rowsSelected: [],
	  	btnEditDisabled: true,
	  	loading: false
	  };

	  this.onSelectRow = this.onSelectRow.bind(this);
	  this.handleDelete = this.handleDelete.bind(this);
	}

	componentDidMount() {
		this.requestLinks();	
	}

	requestLinks() {
		this.setState({ loading: true });

		LinkService.all().then(
	  	(response) => {
	  		this.setState({ rows: response.data, loading: false });
	  	}, (err) => {
	  		this.setState({ loading: false });
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
		});
	}

	handleDelete(rows) {
		rows.forEach((id) => {
			LinkService.delete(id).then(
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
				<HeaderPage name="Links" loading={this.state.loading} />

	    	<div className="row">
	    		<div className="col-lg-12" style={{ margin: '0 2px 12px 0' }}>
	    			
	    			<Link to="links/new"
	    						className="btn btn-primary" 
	    						style={{ marginRight: '5px' }}>
	    				<i className="fa fa-plus"></i> Novo registro
	    			</Link>

	    			<Link to={{ pathname: '/links/edit', state: { registry: this.state.rowsSelected[0] } }}
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
	        		options={{ onDeleteRow: this.handleDelete, deleteText: 'Remover', afterInsertRow: this.handleInsertedRow }}
	        		striped 
	        		hover 
	        		pagination 
	        		search 
	        		deleteRow
	        		selectRow={{ mode: 'checkbox', onSelect: this.onSelectRow} }>
	        		<TableHeaderColumn 
				      	dataField='id' 
				      	hidden
				      	isKey>ID</TableHeaderColumn>
				      <TableHeaderColumn 
				      	dataField='title' 
				      	dataFormat={(cell, row, extra) => {
				      		return <a href={row.url} target="_blank">{row.title}</a>;
				      	}}>Título</TableHeaderColumn>
				      <TableHeaderColumn 
				      	dataField='category.name' 
				      	dataFormat={(cell, row, extra) => row.category.name}>Categoria</TableHeaderColumn>
				      <TableHeaderColumn 
				      	dataField='tags'
				      	dataFormat={(cell, row, extra) => {
				      		return row.tags.map((item) => item.name).join(', ');
				      	}}>Tags</TableHeaderColumn>
					  </BootstrapTable>
	        </div>
	      </div>
      </div>
		);
	}
}

export default Links;