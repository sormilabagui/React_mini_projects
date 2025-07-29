import React from 'react';
import './App.css';
import Colorpalette from "./components/Colorpalette";

const colors = [
  "#FF6B6B",
  "#FFD93D",
  "#6BCB77",
  "#4D96FF",
  "#843B62",
  "#F9F871",
  "#A28089",
  "#00B85D",
  "#F08A5D",
  "#B83B5E"
];

function App() {
  return (
    
      <div className="app">
        <h1>Color Picker Palette</h1>
        <div className="color-grid">
          {colors.map((color, index) => (
            <Colorpalette key={index} color={color} />
          ))}
        </div>
      </div>
    
  );
}

export default App;
