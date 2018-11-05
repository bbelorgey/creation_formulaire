import React, { Component } from 'react';
import FilmList from './components/FilmList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FilmList />
      </div>
    );
  }
}

export default App;
