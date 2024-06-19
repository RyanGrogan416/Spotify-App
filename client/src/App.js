import React from "react";
import { useState } from "react";
import TrackList from "./components/JS_components/playlist_components/TrackList.js";
import EditableTitle from "./components/JS_components/playlist_components/EditableTitle.js";
import SearchBar from "./components/JS_components/SeachBar_components/SearchBar.js";
import SearchResults from "./components/JS_components/SeachBar_components/SearchResults.js";
import style from "./components/CSS_components/grid.css";

function App() {
  const [title, setTitle] = useState("My Playlist");

  return (
    <div style={style.app}>
      <div style={style.searchbar}>
        <SearchBar />
      </div>
      <div style={style.searchresults}>
        <SearchResults />
      </div>
      <div>
        <EditableTitle title={title} setTitle={setTitle} />
      </div>
      <div>
        <TrackList />
      </div>
    </div>
  );
}

export default App;
