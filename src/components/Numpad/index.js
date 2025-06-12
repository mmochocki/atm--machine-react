import React from 'react';
import './Numpad.scss';

const Numpad = ({ onNumberClick, onClear, onDelete, onConfirm }) => {
  return (
    <div className="numpad">
      <div className="numpad-grid">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
          <button
            key={num}
            className="numpad-button"
            onClick={() => onNumberClick(num)}
          >
            {num}
          </button>
        ))}
        <button className="numpad-button" onClick={onClear}>C</button>
        <button className="numpad-button" onClick={() => onNumberClick(0)}>0</button>
        <button className="numpad-button" onClick={onDelete}>←</button>
      </div>
      <button
        className="numpad-button confirm"
        onClick={onConfirm}
      >
        Confirm
      </button>
    </div>
  );
};

export default Numpad;