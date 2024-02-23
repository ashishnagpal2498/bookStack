import React, { useEffect, useState } from 'react'
import BookCard from '../layouts/BookCard'
import Pagination from '../layouts/Pagination'
import { FilterBar } from '../layouts/FilterBar';
import FilterMenu from '../layouts/FilterMenu';
import '../../stylesheets/book-library.css'
import '../../stylesheets/filters.css'
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

  const [filteredBooks, updateFilteredBooks] = useState(books);
  const [loading, setLoading] = useState(true);
  const [openFilterMenu, setOpenFilterMenu] = useState(false);

  const toggleFilterMenu = () => {
    setOpenFilterMenu(!openFilterMenu);
  };
  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])
  const filterBooks = (updatedBooks) => {
    updateFilteredBooks(updatedBooks)
  }
  return (
    <div className='book-library-container'>
      {openFilterMenu && <FilterMenu toggleFilterMenu={toggleFilterMenu} />}
      <div className="container-row container-content-center books-container">
        <FilterBar filterBooks={filterBooks} books={books} openFilterMenu={openFilterMenu} toggleFilterMenu={toggleFilterMenu} />
        
        {filteredBooks.length > 0 ?
          <ul className="book-list">
            <BookCard books={filteredBooks} loading={loading} />
          </ul>
          :
          <div style={{ width: "100%", margin: "20px", textAlign: "center", padding: "40px", fontSize: "24px" }}>No books found.</div>
        }
        <Pagination />
      </div>
    </div>

  )
}

export default BookLibrary