import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBox = () => (
  <div className="searchbox-root">
    <span className="searchbox-icon">
      <FaSearch style={{ color: '#71767b', fontSize: '1.2em' }} />
    </span>
    <input
      className="searchbox-input"
      type="text"
      placeholder="Search"
      aria-label="Search"
    />
  </div>
);

export default SearchBox;
