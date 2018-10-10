import React, { Component } from 'react';
import Book from './Book';
import './App.css';

class App extends Component {
  render() {
    const coverUrl = 'http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api';
    return (
      <div className="App">
        <Book title="stuff" authors="J.R.R. Tolkien" coverUrl={coverUrl}></Book>
      </div>
    );
  }
}

export default App;
