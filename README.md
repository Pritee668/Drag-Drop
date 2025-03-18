Drag-and-Drop Website Builder - Architecture & Documentation
This document provides an overview of the architecture, tools used, and rationale behind the development of the Drag-and-Drop Website Builder.

**Project Overview**
Enhances traditional form-based website building with an intuitive drag-and-drop interface.
Users can drag elements (Text, Images, Buttons) onto a canvas.
Users can modify properties (color, font size, positioning, etc.) in real-time.
Architecture
1. Component-Based Structure
Project Structure (Ensures scalability & maintainability):

/src
 ├── /components
 │   ├── Sidebar.js         # Contains draggable elements (Text, Image, Button)
 │   ├── Canvas.js          # Handles dropped elements and rendering
 │   ├── PropertyEditor.js  # Allows modifying element properties
 ├── App.js                 # Main component (manages state and layout)
 ├── App.css                # Styling for the application
 ├── index.js               # Application entry point


2. Functional Components
Sidebar.js → Provides draggable elements.
Canvas.js → Acts as a drop zone where users can place elements.
PropertyEditor.js → Allows real-time property modifications.
App.js → Manages the global state of all elements.
3. State Management (Real-Time Updates)
useState Hook stores & updates dragged elements dynamically.
Each element’s properties (position, text, color, etc.) are stored in a state array.
