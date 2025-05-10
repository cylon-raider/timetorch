// src/App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="drag-area">
        <h1>🕰️ TimeTorch</h1>
      </div>
      <div className="content">
        <p>This is your draggable transparent overlay app.</p>
        <button className="no-drag">Click me</button>
      </div>
    </div>
  );
}

export default App;
