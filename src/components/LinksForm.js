import React, { Component } from 'react';
import { Link } from 'react-router';
import Select from 'react-select';

import '../styles.css';
import 'react-select/dist/react-select.css';

import CategoryService from '../services/CategoryService';
import TagService from '../services/TagService';

class LinksForm extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      optionsCategory: [],
      optionsTag: []
    };
  }

  componentDidMount() {
    const loading = this.props.options.doLoading;
    this.findCategories(loading);
    this.findTags(loading);
  }

  findCategories(loading) {
    loading(true);

    CategoryService.all().then(
    (response) => {
      loading(false);
      this.setState({ optionsCategory: response.data });
    }, (err) => {
      loading(false);
      alert(`Ocorreu um erro ao buscar as categorias: ${err.message}`)
    });
  }

  findTags(loading) {
    loading(true);

    TagService.all().then(
    (response) => {
      loading(false);
      this.setState({ optionsTag: response.data });
    }, (err) => {
      loading(false);
      alert(`Ocorreu um erro ao buscar as categorias: ${err.message}`)
    });
  }

	render() {
		const { 
      onSubmit, 
      onChangeTitle,
      onChangeURL,
      onChangeCategory, 
      onChangeTag,
      titleValue,
      urlValue,
      categoryValue, 
      tagsValue 
    } = this.props.options;

		return (
			<div className="row">
        <div className="col-lg-12">
        	<form role="form" onSubmit={onSubmit}>
        		<div className="form-group">
              <label>Título</label>
              <input className="form-control" ref="inputTitle" value={titleValue} onChange={onChangeTitle} />
            </div>
            <div className="form-group">
              <label>URL</label>
              <input className="form-control" ref="inputURL" value={urlValue} onChange={onChangeURL} />
            </div>
            <div className="form-group">
              <label>Categoria</label>
              <Select.Creatable
                name="selectCategory"
                valueKey="id"
                labelKey="name"
                value={categoryValue}
                options={this.state.optionsCategory}
                onChange={onChangeCategory}
              />
            </div>
            <div className="form-group">
              <label>Tags</label>
              <Select.Creatable
                name="selectTag"
                valueKey="id"
                labelKey="name"
                value={tagsValue}
                multi
                options={this.state.optionsTag}
                onChange={onChangeTag}
              />
            </div>
            <button type="submit" className="btn btn-success" style={{ marginRight: '5px' }}>Cadastrar</button>
            <Link to="/links" className="btn btn-primary">
            	<i className="fa fa-arrow-left"></i> Voltar
            </Link>
        	</form>
        </div>
			</div>
		);
	}
}

export default LinksForm;