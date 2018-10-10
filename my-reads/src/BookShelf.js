import React, { Component } from 'react';
import Book from './Book';
import PropTypes from 'prop-types'

class BookShelf extends Component {

  static propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onMoveBook: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired
  }

  render() {
    const shelfType = this.props.type;
    const onMoveBook = this.props.onMoveBook;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {this.props.books.map((book) => (
           <li key={book.id}>
              <Book id={book.id} title={book.title} authors={book.authors} coverUrl={book.imageLinks.thumbnail} currentShelf={shelfType} onMoveBook={onMoveBook}></Book>
            </li>
          ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf
