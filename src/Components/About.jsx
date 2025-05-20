import React, { Component } from 'react';
import './About.css';
import companyIntro from '../images/company-intro.jpg';
import companyVision from '../images/company-vision.jpg';

class About extends Component {
  render() {
    return (
      <section id="about" className="about-container" aria-label="About MAS Engineering Solutions">
        <h1 className="about-title" role="heading" aria-level="1">
          About Us
        </h1>

        <div className="content-wrapper">
          {/* First Row: Introduction */}
          <div className="row intro-row">
            <div className="intro-text">
              <h2 className="intro-title" role="heading" aria-level="2">
                Introduction
              </h2>
              <p className="intro-description">
                MAS Engineering Solutions is the gateway to engineering excellence. With a reputation for precision and a dedication to innovation, we stand at the forefront of technological advancement. Let us be your trusted partner in realizing your engineering dreams and achieving your project goals.
              </p>
            </div>
            <div className="intro-image">
              <img
                src={companyIntro}
                alt="MAS Engineering Solutions team showcasing a project"
                loading="lazy"
              />
            </div>
          </div>

          {/* Second Row: Mission */}
          <div className="row mission-row">
            <div className="mission-content">
              <h2 className="mission-title" role="heading" aria-level="2">
                Our Mission
              </h2>
              <p className="mission-description">
                Our mission is to deliver cutting-edge engineering solutions that exceed client expectations. We are dedicated to pushing the boundaries of technology, sustainability, and safety while fostering a culture of continuous improvement and innovation.
              </p>
            </div>
          </div>

          {/* Third Row: Vision */}
          <div className="row vision-row">
            <div className="vision-image">
              <img
                src={companyVision}
                alt="Vision of MAS Engineering Solutions for a sustainable future"
                loading="lazy"
              />
            </div>
            <div className="vision-text">
              <h2 className="vision-title" role="heading" aria-level="2">
                Our Vision
              </h2>
              <p className="vision-description">
                Our vision is to pioneer transformative engineering breakthroughs that positively impact society and the environment. We aspire to create a world where ingenuity knows no bounds and where our solutions enhance the quality of life for all.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;