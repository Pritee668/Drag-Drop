import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Canvas from "./components/Canvas";
import Edit from './components/Edit';
import "./App.css";

const App = () => {
  const [elements, setElements] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null);

  // Handles Drag Start from Sidebar
  const handleDragStart = (e, type) => {
    e.dataTransfer.setData("elementType", type);
  };

  // Handles Drop on Canvas
  const handleDrop = (e) => {
    e.preventDefault();
    const type = e.dataTransfer.getData("elementType");

    const newElement = {
      id: Date.now(),
      type,
      x: e.clientX - 100,
      y: e.clientY - 50,
      content: type === "text" ? "Edit me!" : type === "button" ? "Click Me" : "",
      imageUrl: type === "image" ? "https://via.placeholder.com/100" : "",
      fontSize: 16,
      color: "#000000",
      backgroundColor: "#4CAF50",
      textColor: "#FFFFFF",
      borderRadius: "5px",
      width: 100,
      height: 100,
    };

    setElements([...elements, newElement]);
  };

  // Handles Selection of an Element
  const handleElementClick = (element) => {
    setSelectedElement(element);
  };

  // Updates Property of Selected Element
  const handlePropertyChange = (e) => {
    const { name, value } = e.target;
    if (!selectedElement) return;

    const updatedElement = { ...selectedElement, [name]: value };
    setSelectedElement(updatedElement);

    setElements((prevElements) =>
      prevElements.map((el) => (el.id === selectedElement.id ? updatedElement : el))
    );
  };

  return (
    <div className="container">
      <Sidebar handleDragStart={handleDragStart} />
      <Canvas elements={elements} handleDrop={handleDrop} handleElementClick={handleElementClick} selectedElement={selectedElement} />
      {selectedElement && <Edit selectedElement={selectedElement} handlePropertyChange={handlePropertyChange} />}
    </div>
  );
};

export default App;
