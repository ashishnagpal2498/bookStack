import React from 'react'
import bookUrl1 from "../../book-cover-1.png"
import bookUrl2 from "../../book-cover-2.jpg"
const BookCard = ({books}) => {
  return (
    <>
    {books.map((book, index) => (
        <li className="book-card" key={index}>
          <img className="book-cover" src={index>2 ? bookUrl2 : bookUrl1} alt={book.title} />
          <div className="book-shelf"></div>
        </li>
      ))}
    </>
  )
}

export default BookCard