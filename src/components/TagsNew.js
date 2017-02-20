import React, { Component } from 'react';

import '../styles.css';

import HeaderPage from './common/HeaderPage';
import TagsForm from './TagsForm';

import TagService from '../services/TagService';

class CategoriesEdit extends Component {
	constructor(props) {
	  super(props);

	  this.state = {
	  	nameValue: ''
	  };

		this.handleChange = this.handleChange.bind(this);
	  this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({ nameValue: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		
		TagService.new({ name: this.state.nameValue.trim() }).then(
			(reponse) => {
				this.props.router.push('/tags');
			}, (err) => {
				alert(`Ocorreu um erro: ${err.message}`);
			}
		);
	}

	render() {
		return (
			<div>
				<HeaderPage name="Nova tag" />

				<TagsForm 
					handleSubmit={this.handleSubmit}
					handleChangeName={this.handleChange}
					nameValue={this.state.nameValue}
					/>
      </div>
		);
	}
}

export default CategoriesEdit;