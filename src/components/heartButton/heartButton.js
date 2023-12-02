import React, { useState } from 'react';
import './heartButton.css'; // Import your CSS file for styling

const HeartButton = () => {
  const [showHeart, setShowHeart] = useState(false);

  const handleClick = () => {
    setShowHeart(true);

    // Set a timeout to hide the heart after a certain duration (e.g., 1 second)
    setTimeout(() => {
      setShowHeart(false);
    }, 1000);
  };

  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
      {showHeart && <div className="heart"></div>}
    </div>
  );
};

export default HeartButton;
