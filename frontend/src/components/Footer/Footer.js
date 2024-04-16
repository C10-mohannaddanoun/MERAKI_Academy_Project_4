import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 My Web. All rights reserved.</p>
      <ul>
        <li>
          <a href="tel:+1234567890">
            <i className="fas fa-phone"></i>
            +123-456-7890
          </a>
        </li>
        <li>
          <a href="mailto:info@myweb.com">
            <i className="fas fa-envelope"></i>
            info@myweb.com
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/myweb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
        </li>
        <li>
          <a
            href="https://www.twitter.com/myweb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/myweb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/company/myweb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
