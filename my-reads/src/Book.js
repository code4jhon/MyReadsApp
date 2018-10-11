import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Book extends Component {
  static propTypes = {
    coverUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
    authors: PropTypes.array,
    onMoveBook: PropTypes.func.isRequired
  }

  render() {
    const onMoveBook = this.props.onMoveBook;
    const authors = this.props.authors || [];

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${this.props.coverUrl})` }}></div>
          <div className="book-shelf-changer">
            <select defaultValue={this.props.currentShelf} onChange={ (event) => { onMoveBook({id: this.props.id}, event.target.value)}}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.title}</div>
        <div className="book-authors">{authors}</div>
      </div>
    )
  }
}

export default Book
