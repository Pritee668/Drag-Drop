import React from "react";

const Sidebar = ({ handleDragStart }) => {
  return (
    <div className="sidebar">
      <h3>Elements</h3>
      <div className="draggable" draggable onDragStart={(e) => handleDragStart(e, "text")}>
        Text
      </div>
      <div className="draggable" draggable onDragStart={(e) => handleDragStart(e, "image")}>
        Image
      </div>
      <div className="draggable" draggable onDragStart={(e) => handleDragStart(e, "button")}>
        Button
      </div>
    </div>
  );
};

export default Sidebar;
