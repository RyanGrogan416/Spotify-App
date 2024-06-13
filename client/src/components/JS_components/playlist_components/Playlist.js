import { React, useState } from "react";
import TrackList from "./TrackList";
import EditableTitle from "./EditableTitle";

export default function Playlist() {
  const [title, setTitle] = useState("My Playlist");

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        padding: "10px",
        borderBottom: "1px solid lightgray",
        backgroundColor: "purple",
        width: "100%",
        height: "100%",
        float: "right",
      }}
    >
      <div
        className="Title"
        style={{
          alignItems: "center",
          padding: "10px",
          borderBottom: "1px solid lightgray",
          backgroundColor: "white",
          width: "100%",
        }}
      >
        <EditableTitle title={title} setTitle={setTitle} />
      </div>
      <div
        className="playlist"
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
