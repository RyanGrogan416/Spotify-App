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
        style={{
          width: "100%",
          padding: "12px 20px",
          margin: "25% 0",
          border: "none",
          border: "1px solid #ccc",
          borderRadius: "4px",
          boxSizing: "border-box",
          backgroundColor: "black",
          border: "none",
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
    </>
  );
};

export default SearchBar;
