import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import emailjs from 'emailjs-com';
import mas01 from '../images/MAS-01.png';
import './Contact.css';

class Contact extends Component {
  handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_6hq350y', 'template_mt6ur91', e.target, 'BsLyIUDf2qGDe-ptE')
      .then(
        (result) => {
          alert('Thank you for contacting us! We will get back to you soon.');
          console.log(result.text);
        },
        (error) => {
          alert('There was an error sending your message. Please try again later.');
          console.log(error.text);
        }
      );
  };

  render() {
    return (
      <>
        {/* Contact Us Section */}
        <section id="contact" className="contact-container">
          <h1 className="contact-title">Contact Us</h1>
          <div className="contact-form-wrapper">
            <form onSubmit={this.handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact" className="form-label">
                  Contact
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="contact"
                  name="contact"
                  placeholder="Your Contact Number"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="3"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <div className="form-submit">
                <button type="submit" className="btn-submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-row">
              {/* Logo & Address */}
              <div className="footer-section address-section">
                <img src={mas01} alt="MAS Engineering" className="footer-logo" />
                <p>
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="footer-icon" /> 141-C Rehmanpura,
                  Ibrahim Street, Lahore
                </p>
                <p>
                  <FontAwesomeIcon icon={faPhone} className="footer-icon" /> +92 333 5550788
                </p>
                <p>
                  <FontAwesomeIcon icon={faEnvelope} className="footer-icon" />{' '}
                  masengineeringsol@gmail.com
                </p>
              </div>

              {/* Social Media Links */}
              <div className="footer-section social-section">
                <h5>Follow Us</h5>
                <div className="social-links">
                  <a href="https://facebook.com" className="social-link">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                  </a>
                  <a href="https://instagram.com" className="social-link">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                  </a>
                  <a href="https://linkedin.com" className="social-link">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                  </a>
                </div>
              </div>

              {/* Google Map */}
              <div className="footer-section map-section">
                <h5>Our Location</h5>
                <div className="map-container">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.0589045896622!2d74.31658671161603!3d31.52254207410546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905007aae7087%3A0xe36be6c1d7e22792!2sMAS%20Engineering%20Solutions!5e0!3m2!1sen!2s!4v1747645078214!5m2!1sen!2s"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="MAS Engineering Location"
                  ></iframe>
                </div>
              </div>
            </div>

            <hr className="footer-divider" />

            <div className="footer-copyright">
              <p>
                MAS Engineering Solutions © {new Date().getFullYear()} | All rights reserved. | Designed & Developed by Asim Raza - 03363051501
              </p>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Contact;