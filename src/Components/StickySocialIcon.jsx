import React, { useState } from 'react';
import { FaInstagram, FaWhatsapp, FaFacebook } from 'react-icons/fa';
import './sticysocial.css';

const StickySocialIcon = () => {
  const [showBar, setShowBar] = useState(true);

  const handleClose = () => {
    setShowBar(false);
  };

  const isMobileDevice = () => {
    return /Mobi|Android/i.test(navigator.userAgent);
  };

  const handleSocialIconClick = (url) => {
    if (isMobileDevice()) {
      const isWhatsAppInstalled = /WhatsApp/i.test(navigator.userAgent);
      if (isWhatsAppInstalled) {
        window.location.href = `whatsapp://send?text=Hello&phone=${encodeURIComponent('+917978447013')}`;
      } else {
        window.open(url, '_blank');
      }
    } else {
      window.open(url, '_blank');
    }
  };

  return (
    <>
      {showBar && (
        <div className="sticky-bar">
          <div className="social-icons">
            <FaInstagram
              className="social-icon"
              size={isMobileDevice() ? 24 : 32}
              style={{ color: '#C13584' }} // Set the color for Instagram icon
              onClick={() => handleSocialIconClick('https://www.instagram.com')}
            />
            <FaWhatsapp
              className="social-icon"
              size={isMobileDevice() ? 24 : 32}
              style={{ color: '#25D366' }} // Set the color for WhatsApp icon
              onClick={() => handleSocialIconClick('https://web.whatsapp.com')}
            />
            <FaFacebook
              className="social-icon"
              size={isMobileDevice() ? 24 : 32}
              style={{ color: '#3B5998' }} // Set the color for Facebook icon
              onClick={() => handleSocialIconClick('https://www.facebook.com')}
            />
          </div>
          <div className="call-us">
            <a href="tel:+11234567890" className="phone-number">
              Phone: +1 123 456 7890
            </a>
            <span className="close-icon" onClick={handleClose}>
              &times;
            </span>
          </div>
        </div>
      )}

      {/* Rest of your React component */}
    </>
  );
};

export default StickySocialIcon;
