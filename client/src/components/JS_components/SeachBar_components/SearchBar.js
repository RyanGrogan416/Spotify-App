import React from "react";
import { useState } from "react";
import SearchResults from "./SearchResults";

const SearchBar = () => {
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
        style={{
          width: "100%",
          padding: "12px 20px",
          margin: "8px 0",
          border: "none",
          borderRadius: "4px",
          boxSizing: "border-box",
          backgroundColor: "black",
          outline: "none",
          borderBottom: "2px solid white",
          fontWeight: "bold",
          fontSize: "34px",
          textTransform: "uppercase",
          color: "white",
          cursor: "pointer",
          textDecoration: "none",
          letterSpacing: "1px",
          transition: "all 0.5s ease",
        }}
      />
      <SearchResults query={query} />
    </>
  );
};

export default SearchBar;
