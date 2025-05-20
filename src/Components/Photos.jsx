import React from 'react';
import './Photos.css'; // Import the updated CSS file
// Import all 21 images
import p1 from '../images/p1.jpg';
import p2 from '../images/p2.jpg';
import p3 from '../images/p3.jpg';
import p4 from '../images/p4.jpg';
import p5 from '../images/p5.jpeg';
import p6 from '../images/p6.jpeg';
import p7 from '../images/p7.jpeg';
import p8 from '../images/p8.jpeg';
import p9 from '../images/p9.jpeg';
import p10 from '../images/p10.jpeg';
import p11 from '../images/p11.jpeg';
import p12 from '../images/p12.jpeg';
import p13 from '../images/p13.jpeg';
import p14 from '../images/p14.jpeg';
import p15 from '../images/p15.jpeg';
import p16 from '../images/p16.jpeg';
import p17 from '../images/p17.jpeg';
import p18 from '../images/p18.jpeg';
import p19 from '../images/p19.jpeg';
import p20 from '../images/p20.jpeg';
import p21 from '../images/p21.jpeg';

const Photos = () => {
  // Array of photo objects with src, alt, description, and verticalFit flag
  const photos = [
    { src: p1, alt: 'Photo 1', description: 'AC Cables Termination', verticalFit: true },
    { src: p2, alt: 'Photo 2', description: '15kW System - Canadian Solar N-Type Bifacial 575W', verticalFit: true },
    { src: p3, alt: 'Photo 3', description: '10kW System - Canadian Solar N-Type Bifacial 575W', verticalFit: true },
    { src: p4, alt: 'Photo 4', description: 'Inverex Nitrox 8kW Hybrid, IP-65', verticalFit: true },
    { src: p5, alt: 'Photo 5', verticalFit: true },
    { src: p6, alt: 'Photo 6', verticalFit: true },
    { src: p7, alt: 'Photo 7', verticalFit: true },
    { src: p8, alt: 'Photo 8', verticalFit: true },
    { src: p9, alt: 'Photo 9', verticalFit: true },
    { src: p10, alt: 'Photo 10', verticalFit: false },
    { src: p11, alt: 'Photo 11', verticalFit: true },
    { src: p12, alt: 'Photo 12', verticalFit: true },
    { src: p13, alt: 'Photo 13', verticalFit: true },
    { src: p14, alt: 'Photo 14', verticalFit: true },
    { src: p15, alt: 'Photo 15', verticalFit: true },
    { src: p16, alt: 'Photo 16', verticalFit: false },
    { src: p17, alt: 'Photo 17', verticalFit: true },
    { src: p18, alt: 'Photo 18', verticalFit: true },
    { src: p19, alt: 'Photo 19', verticalFit: false },
    { src: p20, alt: 'Photo 20', verticalFit: true },
    { src: p21, alt: 'Photo 21', verticalFit: true },
  ];

  // Split photos into rows of 4
  const rows = [];
  for (let i = 0; i < photos.length; i += 4) {
    rows.push(photos.slice(i, i + 4));
  }

  return (
    <div className="container-fluid gallery-container">
      <h1 className="gallery-title">Photo Gallery</h1>

      {rows.map((row, rowIndex) => (
        <div className="row mt-4" key={rowIndex}>
          {row.map((photo, index) => (
            <div className="col-lg-3 col-md-3 col-sm-3 photo-card" key={index}>
              <div className="photo-wrapper">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className={`img-fluid photo ${photo.verticalFit ? 'vertical-fit' : ''}`}
                />
              </div>
              <p className="description">{photo.description}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Photos;