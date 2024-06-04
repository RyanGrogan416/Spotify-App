// TrackList.js
import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const initialTracks = [
  { id: "1", title: "Song 1", album: "Album 1", artist: "Artist 1" },
  { id: "2", title: "Song 2", album: "Album 2", artist: "Artist 2" },
  // Add more tracks as needed
];

const TrackList = () => {
  const [tracks, setTracks] = useState(initialTracks);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedTracks = Array.from(tracks);
    const [movedTrack] = reorderedTracks.splice(result.source.index, 1);
    reorderedTracks.splice(result.destination.index, 0, movedTrack);

    setTracks(reorderedTracks);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="playlist">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {tracks.map((track, index) => (
              <Draggable key={track.id} draggableId={track.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={{
                      padding: 16,
                      margin: "0 0 8px 0",
                      backgroundColor: "#fff",
                      border: "1px solid #ddd",
                      ...provided.draggableProps.style,
                    }}
                  >
                    <div>{track.title}</div>
                    <div>{track.album}</div>
                    <div>{track.artist}</div>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TrackList;
