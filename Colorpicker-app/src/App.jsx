import React,{useState} from 'react';
import './App.css';
import Colorpalette from "./components/Colorpalette";


const App = () => {

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
const [selectedColor, setSelectedColor] = useState(null);


  return (
    
      <div className="app-container">
      <div className="grid-section">
        {colors.map((color, index) => (
          <Colorpalette key={index} color={color} onColorClick={setSelectedColor} />
        ))}
      </div>

      <div className="detail-section">
        {selectedColor ? (
          <div className="detail-box">
            <div
              className="big-color"
              style={{ backgroundColor: selectedColor }}
            ></div>
            <p>Hex: {selectedColor}</p>
            <button
              onClick={() => {
                navigator.clipboard.writeText(selectedColor);
              }}
            >
              Copy
            </button>
          </div>
        ) : (
          <p>Select a color</p>
        )}
      </div>
    </div>
    
  );
}

export default App;
