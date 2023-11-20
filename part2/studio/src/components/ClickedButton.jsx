// components/ClickedButton.jsx
import React from 'react';
import './styling.css';

function ClickedButton() {
  const handleRemove = () => {
    alert('You are removing this pin from your board!');
  };

  return (
    <button id="clickedButton" onClick={handleRemove}>
      Saved
    </button>
  );
}

export default ClickedButton;
