import React from "react";
import Playlist from "./components/Playlist.js";
import Navbar from "./components/Navbar.js";
import SearchBar from "./components/SearchBar.js";

function App() {
  return (
    <>
      <Navbar />
      <SearchBar />
      <Playlist />
    </>
  );
}

export default App;
