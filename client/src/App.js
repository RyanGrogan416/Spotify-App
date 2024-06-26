import React from "react";
import { useState } from "react";
import TrackList from "./components/JS_components/playlist_components/TrackList.js";
import EditableTitle from "./components/JS_components/playlist_components/EditableTitle.js";
import SearchBar from "./components/JS_components/SeachBar_components/SearchBar.js";
import SearchResults from "./components/JS_components/SeachBar_components/SearchResults.js";
import styles from "./components/CSS_components/grid.module.css";

function App() {
  const [title, setTitle] = useState("My Playlist");
  const [query, setQuery] = useState("");

  return (
    <div className={styles.app}>
      <div className={styles.searchbar}>
        <SearchBar query={query} setQuery={setQuery} />
      </div>
      <div className={styles.searchresults}>
        <SearchResults query={query} setQuery={setQuery} />
      </div>
      <div className={styles.editableTitle}>
        <EditableTitle title={title} setTitle={setTitle} />
      </div>
      <div className={styles.tracklist}>
        <TrackList />
      </div>
    </div>
  );
}

export default App;
