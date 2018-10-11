import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import BookShelf from './BookShelf';
import * as BooksAPI from './BooksAPI';

class SearchBooks extends Component {

  state = {
    books: []
  }

  onChange = (event) => {
    const me = this;

    BooksAPI.search(event.target.value).then(function (books) {
      books = Array.isArray(books) ? books : [];
      me.setState({books});
    });
  } 

  render() {

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onChange={this.onChange}/>
          </div>
        </div>
        <div className="search-books-results">
          <BookShelf name="Results" type="none" books={this.state.books} onMoveBook={this.props.onMoveBook}></BookShelf>
        </div>
      </div>
    )
  }
}

export default SearchBooks
