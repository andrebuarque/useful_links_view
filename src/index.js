import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'; 

import App from './App';

import Links from './components/Links';
import Tags from './components/Tags';
import Categories from './components/Categories';

ReactDOM.render(
	<Router history={browserHistory}>
    <Route component={App} path="/">
      <IndexRoute component={Links} />
      <Route path="tags" component={Tags}/>
      <Route path="categories" component={Categories}/>
    </Route>
  </Router>,
  document.getElementById('root')
);