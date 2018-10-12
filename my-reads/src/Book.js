import React from 'react';
import PropTypes from 'prop-types'

const Book =  function (props) {
  const onMoveBook = props.onMoveBook;
  const authors = props.authors || [];

  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${props.coverUrl})` }}></div>
        <div className="book-shelf-changer">
          <select defaultValue={props.currentShelf} onChange={ (event) => { onMoveBook({id: props.id}, event.target.value)}}>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{props.title}</div>
      <div className="book-authors">{authors}</div>
    </div>
  )
}

Book.propTypes = {
  coverUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  authors: PropTypes.array,
  onMoveBook: PropTypes.func.isRequired
}

export default Book
