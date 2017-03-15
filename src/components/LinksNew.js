import React, { Component } from 'react';

import '../styles.css';

import HeaderPage from './common/HeaderPage';
import LinksForm from './LinksForm';

import LinkService from '../services/LinkService';

class LinksNew extends Component {
	constructor(props) {
	  super(props);

	  this.state = {
	  	titleValue: '',
	  	urlValue: '',
	  	categoryValue: null,
	  	tagsValue: [],
	  	loading: false
	  };

		this.onChangeTitle = this.onChangeTitle.bind(this);
		this.onChangeURL = this.onChangeURL.bind(this);
		this.onChangeCategory = this.onChangeCategory.bind(this);
		this.onChangeTag = this.onChangeTag.bind(this);
	  this.handleSubmit = this.handleSubmit.bind(this);
	  this.doLoading = this.doLoading.bind(this);
	}

	onChangeTitle(e) {
		this.setState({ titleValue: e.target.value });
	}

	onChangeURL(e) {
		this.setState({ urlValue: e.target.value });
	}

	onChangeCategory(val) {
    this.setState({ categoryValue: val });
  }

  onChangeTag(val) {
    this.setState({ tagsValue: val });
  }

  doLoading(value) {
  	this.setState({ loading: value });
  }

	handleSubmit(e) {
		e.preventDefault();

		const { 
			titleValue: title, 
			urlValue: url, 
			categoryValue: category, 
			tagsValue: tags
		} = this.state;

		this.doLoading(true);
		
		LinkService.new({ 
			title: title.trim(),
			url: url.trim(),
			category_id: category.id,
			tags: tags.map((item) => item.id)
		}).then(
			(reponse) => {
				this.props.router.push('/links');
			}, (err) => {
				this.doLoading(false);
				alert(`Ocorreu um erro: ${err.message}`);
			}
		);
	}

	render() {
		const { titleValue, categoryValue, tagsValue, urlValue, loading } = this.state;

		return (
			<div>
				<HeaderPage name="Novo link" loading={loading} />

				<LinksForm 
					options={
						{
							onSubmit: this.handleSubmit,
							onChangeTitle: this.onChangeTitle,
							onChangeURL: this.onChangeURL,
							onChangeCategory: this.onChangeCategory,
							onChangeTag: this.onChangeTag,
							titleValue: titleValue,
							urlValue: urlValue,
							categoryValue: categoryValue,
							tagsValue: tagsValue,
							doLoading: this.doLoading
						}
					}
					/>
      </div>
		);
	}
}

export default LinksNew;