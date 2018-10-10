import React, { Component } from 'react';
import BookShelf from './BookShelf';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BookShelf></BookShelf>
      </div>
    );
  }
}

export default App;
