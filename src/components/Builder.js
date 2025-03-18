import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Canvas from "./Canvas";
import Edit from './Edit';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function Builder() {
  const [elements, setElements] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null);

  const addElement = (type, left, top) => {
    const newElement = {
      id: Date.now(),
      type,
      content: type === "text" ? "Edit Me!" : "Click Me",
      style: { left, top, position: "absolute" },
    };
    setElements([...elements, newElement]);
  };

  const updateElement = (id, newContent, newStyle) => {
    setElements(
      elements.map((el) =>
        el.id === id ? { ...el, content: newContent, style: newStyle } : el
      )
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="builder-container">
        <Sidebar />
        <Canvas elements={elements} addElement={addElement} setSelectedElement={setSelectedElement} />
        {selectedElement && <Edit element={selectedElement} updateElement={updateElement} />}
      </div>
    </DndProvider>
  );
}

export default Builder;
