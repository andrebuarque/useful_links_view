import React, { Component } from 'react';

import '../styles.css';

import HeaderPage from './common/HeaderPage';
import LinksForm from './LinksForm';

import LinkService from '../services/LinkService';

class LinksEdit extends Component {
	constructor(props) {
	  super(props);

	  const registry = props.location.state.registry;
	  const { title, url, category, tags } = registry;

	  this.state = {
	  	link: registry,
	  	titleValue: title,
	  	urlValue: url,
	  	categoryValue: category,
	  	tagsValue: tags
	  };

		this.onChangeTitle = this.onChangeTitle.bind(this);
		this.onChangeURL = this.onChangeURL.bind(this);
		this.onChangeCategory = this.onChangeCategory.bind(this);
		this.onChangeTag = this.onChangeTag.bind(this);
	  this.handleSubmit = this.handleSubmit.bind(this);
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

	handleSubmit(e) {
		e.preventDefault();

		const { 
			titleValue: title, 
			urlValue: url, 
			categoryValue: category, 
			tagsValue: tags,
			link
		} = this.state;

		link.title = title;
		link.url = url;
		link.category_id = category.id;
		link.tags = tags.map((item) => item.id);

		LinkService.update(link).then(
			(reponse) => {
				this.props.router.push('/links');
			}, (err) => {
				alert(`Ocorreu um erro: ${err.message}`);
			}
		);
	}

	render() {
		const { titleValue, categoryValue, tagsValue, urlValue } = this.state;

		return (
			<div>
				<HeaderPage name="Editar link" />

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
							tagsValue: tagsValue
						}
					}
					/>
      </div>
		);
	}
}

export default LinksEdit;