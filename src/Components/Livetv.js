import React from 'react';
import './live.css';
import LiveVideos from "./assets/LiveVideos.json";
import LiveTrending from "./assets/LiveTrending.json" 
function Livetv() {
    return (
        <div className='liv' >
          <iframe
              className="modal__video-style"
              loading="lazy"
              width="500"
              height="700"
              src="https://www.youtube.com/embed/4UZrsTqkcW4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
        </div>
    )
}

export default Livetv
