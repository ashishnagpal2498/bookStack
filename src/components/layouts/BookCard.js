import React from 'react'
import bookUrl1 from "../../book-cover-1.png"
import bookUrl2 from "../../book-cover-2.jpg"
const BookCard = ({ books, loading }) => {
  return (
    <>
      {books.map((book, index) => (
        <li className="book-card" key={index}>
          
          {loading ?
              <div className="skeleton-book-bg">
                <div className='skeleton-book-cover'>
                </div>
              </div>
            : 
            <div className='book-cover'>
            <img
              className="book-img"
              src={book.title.includes("Potter") ? bookUrl2 : bookUrl1}
              alt={book.title}
            />
            </div>
            }
          <div className="book-shelf"></div>
        </li>
      ))}
    </>
  )
}

export default BookCard