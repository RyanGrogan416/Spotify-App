import React from "react";
import { useState, useEffect } from "react";

const SearchBar = ({ placeholder, data }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={handleInputChange}
      />
    </>
  );
};

export default SearchBar;
