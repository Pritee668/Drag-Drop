import React from "react";

const PropertyEditor = ({ selectedElement, handlePropertyChange }) => {
  return (
    <div className="property-editor">
      <h3>Edit Element</h3>
      {selectedElement.type === "text" && (
        <>
          <label>Text:</label>
          <input type="text" name="content" value={selectedElement.content} onChange={handlePropertyChange} />
          <label>Font Size:</label>
          <input type="number" name="fontSize" value={selectedElement.fontSize} onChange={handlePropertyChange} />
          <label>Text Color:</label>
          <input type="color" name="color" value={selectedElement.color} onChange={handlePropertyChange} />
        </>
      )}
      {selectedElement.type === "image" && (
        <>
          <label>Image URL:</label>
          <input type="text" name="imageUrl" value={selectedElement.imageUrl} onChange={handlePropertyChange} />
          <label>Width:</label>
          <input type="number" name="width" value={selectedElement.width} onChange={handlePropertyChange} />
          <label>Height:</label>
          <input type="number" name="height" value={selectedElement.height} onChange={handlePropertyChange} />
        </>
      )}
      {selectedElement.type === "button" && (
        <>
          <label>Text:</label>
          <input type="text" name="content" value={selectedElement.content} onChange={handlePropertyChange} />
          <label>Background Color:</label>
          <input type="color" name="backgroundColor" value={selectedElement.backgroundColor} onChange={handlePropertyChange} />
          <label>Text Color:</label>
          <input type="color" name="textColor" value={selectedElement.textColor} onChange={handlePropertyChange} />
          <label>Border Radius:</label>
          <input type="text" name="borderRadius" value={selectedElement.borderRadius} onChange={handlePropertyChange} />
        </>
      )}
    </div>
  );
};

export default PropertyEditor;
