import { React, useState } from "react";
import TrackList from "./TrackList";
import EditableTitle from "./EditableTitle";

export default function Playlist() {
  const [title, setTitle] = useState("My Playlist");

  return (
    <div
      style={{
        display: "flexbox",
        alignItems: "flex-start",
        flexWrap: "wrap",
        padding: "10px",
        borderBottom: "1px solid lightgray",
        backgroundColor: "purple",
        width: "100%",
        height: "100%",
      }}
    >
      <div
        className="Title-container"
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
        className="playlist-container"
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
