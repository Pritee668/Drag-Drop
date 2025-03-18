// src/components/Element.js
import React from "react";

const Element = ({ element, onClick, isSelected }) => {
  return (
    <div
      className={`element ${isSelected ? "selected" : ""}`}
      style={{ position: "absolute", left: element.x, top: element.y }}
      onClick={() => onClick(element)}
      title="Click to edit"
    >
      {element.type === "text" && <p>{element.content}</p>}
      {element.type === "image" && <img src={element.imageUrl} alt="Dropped" width="100" />}
      {element.type === "button" && <button>{element.content}</button>}
    </div>
  );
};

export default Element;
