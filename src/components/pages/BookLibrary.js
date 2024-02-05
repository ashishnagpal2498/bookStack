import React, {useState} from 'react'
import BookCard from '../layouts/BookCard'
import Pagination from '../layouts/Pagination'
import Search from '../layouts/Search';

const books = [
    {
      title: "Harry Potter",
      author: "J.K Rowling"
    }, {
      title: "Abc",
      author: "ghfd"
    },
    {
      title: "Fun with maths",
      author: "R. D Sharma"
    }
  
  ];

const BookLibrary = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [filter, setFilter] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('title');
    const booksPerPage = 6; // Change this as needed
  
    const filteredBooks = books
      .filter(book => filter === 'all' || book.genre === filter)
      .filter(book => book.title.toLowerCase().includes(searchTerm.toLowerCase()));
  
    const sortedBooks = [...filteredBooks].sort((a, b) => {
      if (sortBy === 'title') {
        return a.title.localeCompare(b.title);
      } else if (sortBy === 'author') {
        return a.author.localeCompare(b.author);
      } else if (sortBy === 'publication_date') {
        return new Date(b.publicationDate) - new Date(a.publicationDate);
      }
      return 0;
    });
  
    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = sortedBooks.slice(indexOfFirstBook, indexOfLastBook);
  
    const totalPages = Math.ceil(sortedBooks.length / booksPerPage);
  
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    const handleFilterChange = (selectedFilter) => {
      setFilter(selectedFilter);
      setCurrentPage(1); 
    };
  
    const handleSearchChange = (newSearchTerm) => {
      setSearchTerm(newSearchTerm);
      setCurrentPage(1); 
    };
  
    const handleSortChange = (selectedSortBy) => {
      setSortBy(selectedSortBy);
      setCurrentPage(1); 
    };
  
  return (
    <div className="container-row container-content-center">
    <div className="header">
      <div className="filter-search-sort">
        <button>Filter</button>
        <Search onSearchChange={handleSearchChange} />
        <button>Sort By</button>
      </div>
    </div>

    <ul className="book-list">
      <BookCard books={books}/>
    </ul>

    <div className="pagination">
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  </div>
  )
}

export default BookLibrary