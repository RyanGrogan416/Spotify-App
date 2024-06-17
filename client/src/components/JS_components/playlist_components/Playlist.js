import { React, useState } from "react";
import TrackList from "./TrackList";
import EditableTitle from "./EditableTitle";
import style from "/workspaces/Spotify-App/client/src/components/CSS_components/grid.css";

export default function Playlist() {
  const [title, setTitle] = useState("My Playlist");

  return (
    <div className={style.page_grid}>
      <div
        style={{
          alignItems: "center",
          padding: "10px",
          margin: "25% 0",
          borderBottom: "1px solid lightgray",
          backgroundColor: "white",
          width: "100%",
        }}
      >
        <EditableTitle title={title} setTitle={setTitle} />
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
          backgroundColor: "white",
        }}
      >
        <TrackList />
      </div>
    </div>
  );
}
