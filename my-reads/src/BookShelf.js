import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types'

const BookShelf = function(props) {
  const onMoveBook = props.onMoveBook;

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
        {props.books.map((book) => (
          <li key={book.id}>
            <Book id={book.id} title={book.title} authors={book.authors} coverUrl={book.imageLinks && book.imageLinks.thumbnail} currentShelf={book.shelf} onMoveBook={onMoveBook}></Book>
          </li>
        ))}
        </ol>
      </div>
    </div>
    )
}

BookShelf.propTypes = {
  name: PropTypes.string.isRequired,
  onMoveBook: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired
}

export default BookShelf
