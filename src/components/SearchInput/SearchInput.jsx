import React, { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import './SearchInput.css'; // Asegúrate de que el archivo CSS esté en la misma carpeta

const SearchInput = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`search-wrapper ${isFocused ? 'focused' : ''}`}>
      <SearchOutlined className="search-icon" />
      <input
        type="text"
        placeholder="Search"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
};

export default SearchInput;
