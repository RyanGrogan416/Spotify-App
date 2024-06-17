import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/JS_components/Login.js";
import Dashboard from "./components/JS_components/Dashboard.js";
import Playlist from "./components/JS_components/playlist_components/Playlist.js";
import SearchBar from "./components/JS_components/SeachBar_components/SearchBar.js";

const code = new URLSearchParams(window.location.search).get("code");

function App() {
  return code ? <Dashboard code={code} /> : <Login />;
  // <div
  //   style={{
  //     display: "flex",
  //     backgroundColor: "pink",
  //     width: "100%",
  //     height: "100vh",
  //   }}
  // >
  //   <div
  //     className="SearchBar-container"
  //     style={{
  //       top: "25px",
  //       width: "50%",
  //       height: "100vh",
  //     }}
  //   >
  //     <SearchBar />
  //   </div>
  //   <div
  //     className="Playlist-container"
  //     style={{
  //       top: "25px",
  //       width: "50%",
  //       height: "100vh",
  //     }}
  //   >
  //     <Playlist />
  //   </div>
  // </div>
}

export default App;
