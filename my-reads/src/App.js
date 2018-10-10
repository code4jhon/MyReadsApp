import React, { Component } from 'react';
import BookShelf from './BookShelf';
import * as BooksAPI from './BooksAPI';
import './App.css';

class App extends Component {
  state = {
    wantToRead: [],
    currentlyReading: [],
    read: []
  }

  componentDidMount () {
    const me = this;

    BooksAPI.getAll().then(function (books) {
      const shelves = {
        wantToRead: [],
        currentlyReading: [],
        read: []
      } 

      books.forEach((book) => shelves[book.shelf].push(book));

      me.setState({
        wantToRead: shelves.wantToRead,
        currentlyReading: shelves.currentlyReading,
        read: shelves.read
      });
    });
  }

  render() {
    return (
      <div className="App">
        <BookShelf name="To Read" books={this.state.wantToRead}></BookShelf>
        <BookShelf name="Reading" books={this.state.currentlyReading}></BookShelf>
        <BookShelf name="Read" books={this.state.read}></BookShelf>
      </div>
    );
  }
}

export default App;
