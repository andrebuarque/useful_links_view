import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'; 

import App from './App';

import Links from './components/Links';
import Tags from './components/Tags';
import Categories from './components/Categories';
import CategoriesNew from './components/CategoriesNew';
import CategoriesEdit from './components/CategoriesEdit';

ReactDOM.render(
	<Router history={browserHistory}>
    <Route component={App} path="/">
      <IndexRoute component={Links} />
      <Route path="tags" component={Tags}/>
      <Route path="categories" component={Categories} />
      <Route path="categories/new" component={CategoriesNew} />
      <Route path="categories/edit" component={CategoriesEdit} />
    </Route>
  </Router>,
  document.getElementById('root')
);