import React from 'react';
import './Colorpalette.css';

const Colorpalette = ({ color, onColorClick }) => {
  return (
    <div className="color-box-wrapper">
      <div
        className="color-box"
        style={{ backgroundColor: color }}
        onClick={() => onColorClick(color)}
      >
        <span className="color-code">{color}</span>
      </div>
    </div>
  );
};

export default Colorpalette;
