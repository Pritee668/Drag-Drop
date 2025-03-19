import React, { useState } from "react";
import "./Canvas.css";
import img from '../assests/image.png';

const Canvas = () => {
  const [elements, setElements] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProperties, setNewProperties] = useState({});

  // Handle Drag Start
  const handleDragStart = (e, type) => {
    e.dataTransfer.setData("elementType", type);
  };

  // Handle Drop
  const handleDrop = (e) => {
    e.preventDefault();
    const elementType = e.dataTransfer.getData("elementType");
    const newElement = {
      id: Date.now(),
      type: elementType,
      content: elementType === "button" ? "Click Me!" : elementType === "text" ? "New Text" : `${img}`,
      x: e.clientX - 50,
      y: e.clientY - 25,
      fontSize: "16px",
      color: "#000",
      backgroundColor: "#fff",
    };
    setElements([...elements, newElement]);
  };

  const handleDragOver = (e) => e.preventDefault();

  // Open Edit Modal
  const handleElementClick = (element) => {
    setSelectedElement(element);
    setNewProperties({
      fontSize: element.fontSize,
      color: element.color,
      backgroundColor: element.backgroundColor,
      content: element.content,
    });
    setIsModalOpen(true);
  };

  // Handle Property Change
  const handlePropertyChange = (e) => {
    setNewProperties({ ...newProperties, [e.target.name]: e.target.value });
  };

  // Save Changes
  const handleSaveChanges = () => {
    setElements((prevElements) =>
      prevElements.map((el) =>
        el.id === selectedElement.id ? { ...el, ...newProperties } : el
      )
    );
    setIsModalOpen(false);
  };

  return (
    <div className="app-container">
      <div className="canvas" onDrop={handleDrop} onDragOver={handleDragOver}>
        {elements.map((element) => (
          <div
            key={element.id}
            className="draggable-element"
            style={{
              position: "absolute",
              left: element.x,
              top: element.y,
              fontSize: element.fontSize,
              color: element.color,
              backgroundColor: element.backgroundColor,
              padding: element.type !== "image" ? "10px" : "0",
              cursor: "pointer",
            }}
            draggable
            onClick={() => handleElementClick(element)}
          >
            {element.type === "text" && element.content}
            {element.type === "button" && <button>{element.content}</button>}
            {element.type === "image" && (
              <img src={element.content} alt="Dropped" style={{ width: "100px", height: "100px" }} />
            )}
          </div>
        ))}
      </div>

      {/* Modal for Editing Properties */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Edit Properties</h3>

            {selectedElement.type !== "image" && (
              <>
                <label>Font Size:</label>
                <input
                  type="number"
                  name="fontSize"
                  value={parseInt(newProperties.fontSize)}
                  onChange={handlePropertyChange}
                />

                <label>Text Color:</label>
                <input type="color" name="color" value={newProperties.color} onChange={handlePropertyChange} />

                <label>Background Color:</label>
                <input type="color" name="backgroundColor" value={newProperties.backgroundColor} onChange={handlePropertyChange} />
              </>
            )}

            {selectedElement.type === "image" && (
              <>
                <label>Image URL:</label>
                <input type="text" name="content" value={newProperties.content} onChange={handlePropertyChange} />
              </>
            )}

            <button onClick={handleSaveChanges}>Save</button>
            <button onClick={() => setIsModalOpen(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Canvas;
