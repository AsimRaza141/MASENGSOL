import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsAppButton = () => {
  const whatsappLink = 'https://wa.me/+923335550788?text=Hello!%20I%27d%20like%20to%20inquire%20about%20your%20services.';

  return (
    <a
      href={whatsappLink}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      title="Contact us on WhatsApp"
    >
      <FontAwesomeIcon icon={faWhatsapp} size="2x" />
      <span>Contact us</span>
    </a>
  );
};

export default WhatsAppButton;
