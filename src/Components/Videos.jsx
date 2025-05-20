import { useRef } from 'react';
import './Videos.css'; // Import the CSS for animations
import v1 from '../Videos/v1.mp4';
import v2 from '../Videos/v2.mp4';
import v3 from '../Videos/v3.mp4';
import v4 from '../Videos/v4.mp4';
import v5 from '../Videos/v5.mp4';
import v6 from '../Videos/v6.mp4';

const Videos = () => {
  // Function to handle video play on hover
  const handleMouseEnter = (videoRef) => {
    videoRef.current.play();
  };

  // Function to handle video stop on mouse leave
  const handleMouseLeave = (videoRef) => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0; // Optional: Reset the video to start
  };

  // Creating refs for videos
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);
  const videoRef4 = useRef(null);
  const videoRef5 = useRef(null);
  const videoRef6 = useRef(null);

  return (
    <div className="video-container container mt-5">
      <h1 className="video-gallery-title">Video Gallery</h1>

      <div className="row">
        {/* First Row */}
        <div className="col-md-6 video-card">
          <div className="video-wrapper">
            <video
              className="video"
              src={v1}
              muted
              loop
              ref={videoRef1}
              onMouseEnter={() => handleMouseEnter(videoRef1)}
              onMouseLeave={() => handleMouseLeave(videoRef1)}
            ></video>
          </div>
          <p className="description">20kW System - Longi HIMO-6 575W</p>
        </div>

        <div className="col-md-6 video-card">
          <div className="video-wrapper">
            <video
              className="video"
              src={v2}
              muted
              loop
              ref={videoRef2}
              onMouseEnter={() => handleMouseEnter(videoRef2)}
              onMouseLeave={() => handleMouseLeave(videoRef2)}
            ></video>
          </div>
          <p className="description">AC/DC Cables Termination</p>
        </div>
      </div>

      <div className="row mt-4">
        {/* Second Row */}
        <div className="col-md-6 video-card">
          <div className="video-wrapper">
            <video
              className="video"
              src={v3}
              muted
              loop
              ref={videoRef3}
              onMouseEnter={() => handleMouseEnter(videoRef3)}
              onMouseLeave={() => handleMouseLeave(videoRef3)}
            ></video>
          </div>
          <p className="description">Earth Resistance Test</p>
        </div>

        <div className="col-md-6 video-card">
          <div className="video-wrapper">
            <video
              className="video"
              src={v4}
              muted
              loop
              ref={videoRef4}
              onMouseEnter={() => handleMouseEnter(videoRef4)}
              onMouseLeave={() => handleMouseLeave(videoRef4)}
            ></video>
          </div>
          <p className="description">Earthing - Bare Cu Conductor 16mm2, Cu strip 5x25mm</p>
        </div>
      </div>

      <div className="row mt-4">
        {/* Third Row */}
        <div className="col-md-6 video-card">
          <div className="video-wrapper">
            <video
              className="video"
              src={v5}
              muted
              loop
              ref={videoRef5}
              onMouseEnter={() => handleMouseEnter(videoRef5)}
              onMouseLeave={() => handleMouseLeave(videoRef5)}
            ></video>
          </div>
          <p className="description">DC/Earthing Cables Routing</p>
        </div>

        <div className="col-md-6 video-card">
          <div className="video-wrapper">
            <video
              className="video"
              src={v6}
              muted
              loop
              ref={videoRef6}
              onMouseEnter={() => handleMouseEnter(videoRef6)}
              onMouseLeave={() => handleMouseLeave(videoRef6)}
            ></video>
          </div>
          <p className="description">Bore for Earthing</p>
        </div>
      </div>
      {/* Note: For home page with moving videos (e.g., slider), wrap in a custom component and apply .video-container */}
    </div>
  );
};

export default Videos;