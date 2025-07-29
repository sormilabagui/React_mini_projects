import React, { useState } from 'react'
import "./Colorpalette.css";

 const Colorpalette = ({ color }) => {

    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(color);
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 1000);                      //in this func with settimeout the copied will be removed after duration of 1 sec
    };


  return (
    <div className="color-box-wrapper">
      {copied && <div className="copied-popup">Copied!</div>}
    <div 
    className='color-box' 
    style={{ backgroundColor: color }}
    onClick={handleCopy}
    >
        <span className='color-code'>{color}</span>
        </div>
    </div>
  );
};

export default Colorpalette;