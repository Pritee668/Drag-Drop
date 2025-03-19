import React from "react";
import Sidebar from "./components/Sidebar";
import Canvas from "./components/Canvas";
import "./App.css";

const App = () => {
  const handleDragStart = (e, type) => {
    e.dataTransfer.setData("elementType", type);
  };
  
  return (
    <div className="container">
      <Sidebar handleDragStart={handleDragStart} />
      <Canvas/>
    </div>
  );
};

export default App;
