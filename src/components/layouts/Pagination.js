import React, {useState} from 'react';

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 6; 

  const changePage = (page) => {
    setCurrentPage(page);
   
    console.log("Page changed to:", page);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="pagination">
    <button className='pagination-btn' onClick={prevPage} disabled={currentPage === 1}>
    &laquo; &nbsp; &nbsp; Prev
    </button>
    <ul >
      {[...Array(totalPages).keys()].map((page) => (
        <li key={page + 1} className={page+1 === currentPage ? 'active' : ''} onClick={() => changePage(page + 1)}>{page + 1}</li>
      ))}
    </ul>
    <button className='pagination-btn' onClick={nextPage} disabled={currentPage === totalPages}>Next &nbsp; &nbsp; &raquo;</button>
  </div>
  );
};

export default Pagination;
