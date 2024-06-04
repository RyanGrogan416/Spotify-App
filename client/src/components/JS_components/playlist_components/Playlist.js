import { React, useState } from "react";
import TrackList from "./TrackList";
import EditableTitle from "./EditableTitle";

export default function Playlist() {
  const [title, setTitle] = useState("My Playlist");

  return (
    <>
      <div className="Title-container">
        <EditableTitle title={title} setTitle={setTitle} />
      </div>
      <div className="playlist-container">
        <TrackList />
      </div>
    </>
  );
}
