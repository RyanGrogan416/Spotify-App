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
import SearchBar from "./components/JS_components/SeachBar_components/SearchBar.js";

function App() {
  return (
    <Container
      style={{
        display: "flex",
      }}
    >
      <div
        className="SearchBar-container"
        style={{
          top: "25px",
          width: "50%",
          height: "100vh",
        }}
      >
        <SearchBar />
      </div>
      <div
        className="Playlist-container"
        style={{
          top: "25px",
          width: "50%",
          height: "100vh",
        }}
      >
        <Playlist />
      </div>
    </Container>
  );
}

export default App;
