import React, { Component } from 'react';

import '../styles.css';

import HeaderPage from './common/HeaderPage';
import CategoriesForm from './CategoriesForm';

import CategoryService from '../services/CategoryService';

class CategoriesEdit extends Component {
	constructor(props) {
	  super(props);

	  const registry = props.location.state.registry;
	
	  this.state = {
	  	category: registry,
	  	nameValue: registry.name
	  };

		this.handleChange = this.handleChange.bind(this);
	  this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({ nameValue: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();

		let { category, nameValue } = this.state;

		category.name = nameValue.trim();

		CategoryService.update(category).then(
			(reponse) => {
				this.props.router.push('/categories');
			}, (err) => {
				alert(`Ocorreu um erro: ${err}`);
			}
		);
	}

	render() {
		return (
			<div>
				<HeaderPage name="Editar categoria" />

				<CategoriesForm 
					handleSubmit={this.handleSubmit}
					handleChangeName={this.handleChange}
					nameValue={this.state.nameValue}
					/>
      </div>
		);
	}
}

export default CategoriesEdit;