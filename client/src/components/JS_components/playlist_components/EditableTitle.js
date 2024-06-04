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

  return (
    <div>
      {isEditing ? (
        <input
          type={title}
          value={title}
          onChange={handleChange}
          onBlur={handleBlur}
          autoFocus
        />
      ) : (
        <h1 onDoubleClick={handleDoubleClick} style={{ cursor: "pointer" }}>
          {title}
        </h1>
      )}
    </div>
  );
};

export default EditableTitle;
