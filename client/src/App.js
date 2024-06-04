import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Row,
  Card,
} from "react-bootstrap";
import Playlist from "./components/JS_components/playlist_components/Playlist.js";
import Navbar from "./components/JS_components/Navbar.js";
import SearchBar from "./components/JS_components/SearchBar.js";

function App() {
  return (
    <>
      <SearchBar />
      <Navbar />
      <Playlist />
    </>
  );
}

export default App;
