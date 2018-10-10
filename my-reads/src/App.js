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
    this.loadAllBooks();
  }

  loadAllBooks () {
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

  onMoveBook = (book, shelf) => {
    const me = this;

    BooksAPI.update(book, shelf).then(()=> me.loadAllBooks());
  }

  render() {
    return (
      <div className="App">
        <BookShelf name="To Read" type="wantToRead" books={this.state.wantToRead} onMoveBook={this.onMoveBook}></BookShelf>
        <BookShelf name="Reading" type="currentlyReading" books={this.state.currentlyReading} onMoveBook={this.onMoveBook}></BookShelf>
        <BookShelf name="Read" type="read" books={this.state.read} onMoveBook={this.onMoveBook}></BookShelf>
      </div>
    );
  }
}

export default App;
