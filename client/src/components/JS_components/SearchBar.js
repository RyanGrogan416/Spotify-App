import React from "react";
import { useState } from "react";

const SearchBar = ({ placeholder, data }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="search"
        value={query}
        onChange={handleInputChange}
      />
    </>
  );
};

export default SearchBar;
