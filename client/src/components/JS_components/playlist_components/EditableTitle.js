// EditableTitle.js
import React, { useState } from "react";

const EditableTitle = ({ title, setTitle }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setIsEditing(false);
    }
  };

  return (
    <div>
      {isEditing ? (
        <input
          type="text"
          value={title}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          style={{
            fontWeight: "bold",
            fontSize: "34px",
            color: "grey", // Muted grey text
            backgroundColor: "transparent", // Transparent background
            border: "none",
            outline: "none", // Using outline instead of border
            width: "100%",
            height: "50px", // Ensure the input takes the full width
            padding: 0, // Match the padding to default <h1>
            margin: 0, // Match the margin to default <h1>
          }}
          autoFocus
        />
      ) : (
        <h1
          onDoubleClick={handleDoubleClick}
          style={{ cursor: "pointer", height: "50px", margin: 0, padding: 0 }}
        >
          {title}
        </h1>
      )}
    </div>
  );
};

export default EditableTitle;
