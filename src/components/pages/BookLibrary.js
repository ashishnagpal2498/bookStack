import React, {useState} from 'react'
import BookCard from '../layouts/BookCard'
import Pagination from '../layouts/Pagination'
import { FilterBar } from '../layouts/FilterBar';

const books = [
    {
      title: "Percy Jackson 1",
      author: "Rick Riordan",
    }, {
      title: "Percy Jackson 2",
      author: "Rick Riordan",
    },
    {
      title: "Percy Jackson 3",
      author: "Rick Riordan",
    },
    {
      title: "Harry Potter 1",
      author: "J. K Rowling"
    },
    {
      title: "Harry Potter 2",
      author: "J. K Rowling"
    },
    {
      title: "Harry Potter 3",
      author: "J. K Rowling"
    }
  
  ];

const BookLibrary = () => {
  
  const [filteredBooks,updateFilteredBooks] = useState(books);

  const filterBooks = (updatedBooks) => {
      updateFilteredBooks(updatedBooks)
  }
  return (
    <div className="container-row container-content-center">
    <FilterBar filterBooks = {filterBooks} books={books} />
    { filteredBooks.length > 0 ?
    <ul className="book-list">
      <BookCard books={filteredBooks}/>
    </ul>
    :
      <div style={{width: "100%", margin: "20px",textAlign: "center",padding: "40px",fontSize: "24px"}}>No books found.</div>
}
    <div className="pagination">
      <Pagination/>
    </div>
  </div>
  )
}

export default BookLibrary