import React, { Component } from 'react';
import BookShelf from './BookShelf';
import SearchBooks from './SearchBooks';
import { Link, Route } from 'react-router-dom';
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
        <Route path="/" exact render={()=> (
          <div>
            <BookShelf name="To Read" type="wantToRead" books={this.state.wantToRead} onMoveBook={this.onMoveBook}></BookShelf>
            <BookShelf name="Reading" type="currentlyReading" books={this.state.currentlyReading} onMoveBook={this.onMoveBook}></BookShelf>
            <BookShelf name="Read" type="read" books={this.state.read} onMoveBook={this.onMoveBook}></BookShelf>
            <div className="open-search">
              <Link to="Search">Add a book</Link>
            </div>
          </div>
        )}/>

        <Route path='/Search' render={()=> (
          <SearchBooks onMoveBook={this.onMoveBook}></SearchBooks>
        )}/>
      </div>
    );
  }
}

export default App;
