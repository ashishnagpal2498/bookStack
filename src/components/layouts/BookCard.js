import React from 'react'

const BookCard = ({books}) => {
  return (
    <>
    {books.map((book, index) => (
        <li className="book-card" key={index}>
          <img className="book-cover" src={book.coverUrl} alt={book.title} />
          <div className="book-shelf">{book.shelf}</div>
        </li>
      ))}
    </>
  )
}

export default BookCard