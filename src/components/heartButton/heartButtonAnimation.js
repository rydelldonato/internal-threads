import React, { useState, useEffect } from 'react';
import './heartButtonAnimation.css'; // Import your CSS file for styling

const HeartButton = () => {
  const [showHeart, setShowHeart] = useState(false);

  const handleClick = () => {
    // Play the MP3 sound when the image is clicked
    const audio = new Audio('/cute-notification.mp3');
    audio.play();

    setShowHeart(true);

    // Set a timeout to hide the heart after a certain duration (e.g., 1 second)
    setTimeout(() => {
      setShowHeart(false);
    }, 1000);
  };

  // Cleanup the audio element on component unmount
  useEffect(() => {
    return () => {
      // Cleanup code here, if needed
    };
  }, []);

  return (
    <div>
      <div className='heartButton'>
        <img onClick={handleClick} alt='heartButton' src='./icons-heart-button.png'/>
      </div>
      {showHeart && <div className="heart"></div>}
    </div>
  );
};

export default HeartButton;
