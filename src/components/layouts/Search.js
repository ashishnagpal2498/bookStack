import React, { useState, useRef } from 'react';
import '../../stylesheets/book-library.css'

const Search = ({ onSearchChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);
  let typingTimer;

  const handleInputChange = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);

    clearTimeout(typingTimer);

    typingTimer = setTimeout(() => {
      onSearchChange(newSearchTerm);
    }, 1000);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className={`search-box ${isFocused ? 'focused' : ''}`}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default Search;

