import React, { Component } from 'react';
import Book from './Book';

class BookShelf extends Component {
  render() {
    const shelfType = this.props.type;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {this.props.books.map((book) => (
           <li key={book.id}>
              <Book title={book.title} authors={book.authors} coverUrl={book.imageLinks.thumbnail} currentShelf={shelfType}></Book>
            </li>
          ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf
