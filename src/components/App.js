import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './containers/search_bar'

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

export default App;
