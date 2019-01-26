import React from 'react';
import './MemoryGame.js';
import './MemoryCard.css';

  
  // Extracted into it's own component
export default const MemoryCard = ({ image, isSelected, isCorrect, onSelect, countryName }) => (
  <div
    className="modal mui-panel"
    onClick={() => {
      // You can only select a card that's not already correct and
      // isn't currently selected
      if (!isCorrect && !isSelected) {
        onSelect();
      }
    }}
  >
    <img
      style={{visibility: (isCorrect || isSelected) ? 'visible' : 'hidden' }}
      src={image}
      srcSet={image}
      alt={countryName}
    />
    <p // This displays the country name of the cheetos if there is a match. 
      style={{ visibility: (isCorrect) ? 'visible' : 'hidden' }} className="nametest">{countryName}</p>
  </div>
);
