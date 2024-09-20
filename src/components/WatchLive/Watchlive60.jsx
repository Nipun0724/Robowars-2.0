import React from 'react';
import './Watchlive.css'

const Watchlive60 = () => {
  return (
    <div className="video-container">
      <iframe
        width="100"
        height="300"
        src="https://www.youtube.com/embed/bRGWPYwcvZU" // Corrected embed link
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      {/* You can add comments like this outside the JSX */}
    </div>
  );
};

export default Watchlive60;
