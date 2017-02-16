import React, { Component } from 'react';

import './styles.css';

import Navbar from './components/navigation/Navbar';

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <Navbar />
        <div id="page-wrapper">
					{ this.props.children }
        </div>
      </div>
    );
  }
}

export default App;