import React from "react";

const Canvas = ({ elements, handleDrop, handleElementClick, selectedElement }) => {
  return (
    <div className="canvas" onDragOver={(e) => e.preventDefault()} onDrop={handleDrop}>
      {elements.map((el) => (
        <div
          key={el.id}
          className={`element ${selectedElement?.id === el.id ? "selected" : ""}`}
          style={{
            position: "absolute",
            left: el.x,
            top: el.y,
            fontSize: `${el.fontSize}px`,
            color: el.color,
            backgroundColor: el.backgroundColor,
            borderRadius: el.borderRadius,
            width: el.type === "image" ? `${el.width}px` : "auto",
            height: el.type === "image" ? `${el.height}px` : "auto",
          }}
          onClick={() => handleElementClick(el)}
        >
          {el.type === "text" && <p style={{ color: el.color }}>{el.content}</p>}
          {el.type === "image" && <img src={el.imageUrl} alt="Dropped" width={el.width} height={el.height} />}
          {el.type === "button" && <button style={{ color: el.textColor }}>{el.content}</button>}
        </div>
      ))}
    </div>
  );
};

export default Canvas;
