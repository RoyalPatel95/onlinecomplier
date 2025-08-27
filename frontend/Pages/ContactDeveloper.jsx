import React from 'react';
import './ContactDeveloper.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const ContactDeveloper = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact the Developer</h1>
      <p className="contact-description">
        If you have any questions, suggestions, or want to collaborate, feel free to reach out.
      </p>

      <div className="contact-section">
        <h3>📧 Email:</h3>
        <p><a href="mailto:katiyaransh955@gmail.com">katiyaransh955@gmail.com</a></p>

        <h3>📞 Mobile:</h3>
        <p><a href="tel:+919555515561">+91 95555 15561</a></p>

        <h3>🌐 Social Links:</h3>
        <div className="social-icons">
          <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://instagram.com/kurmi.ansh.patel" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/ansh-katiyar-a992a42aa/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        </div>
      </div>
    </div>
  );
};

export default ContactDeveloper;
