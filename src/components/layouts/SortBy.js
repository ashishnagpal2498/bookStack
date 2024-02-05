import React from 'react';

const SortBy = ({ onSortChange }) => {
  const handleSortChange = (e) => {
    const selectedSortBy = e.target.value;
    onSortChange(selectedSortBy);
  };

  return (
    <select onChange={handleSortChange}>
      <option value="title">Title</option>
      <option value="author">Author</option>
      <option value="publication_date">Publication Date</option>
    </select>
  );
};

export default SortBy;
