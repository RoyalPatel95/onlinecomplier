import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import './Footer.css';

const companyLinks = [
  { name: "About", to: "/about" },
  { name: "Contact", to: "/contact" },
  { name: "Terms & Conditions", to: "/term" },
];
const FreeLink = [
  { name: "Python 3 Tutorials", to: "https://docs.python.org/3/" },
  { name: "SQL Tutorials", to: "https://dev.mysql.com/doc/" },
  { name: "Java Tutorials", to: "https://www.tpointtech.com/" },
];

const Footer = () => {
  return (
    <footer>
      <div className="container">

        {/* Free Tutorials */}
        <div>
          <h3>Free Tutorials</h3>
            <ul>
            {FreeLink.map(({ name, to }) => (
              <li key={name}>
                {to === "#" ? (
                  <a href={to}>{name}</a>
                ) : (
                  <Link to={to}>{name}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        
        {/* Online Compilers */}
        <div>
          <h3>Online Compilers</h3>
          <ul>
            {["Python", "R", "SQL", "JavaScript", "Java", "C", "C++"].map((item) => (
              <li key={item}>
                <a href="#">{item} Compiler</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Apps */}
        <div>
          <h3>Mobile Apps</h3>
          <ul>
            {["Learn Python App", "Learn C App", "Learn Java App", "Learn C++ App"].map((item) => (
              <li key={item}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3>Company</h3>
          <ul>
            {companyLinks.map(({ name, to }) => (
              <li key={name}>
                {to === "#" ? (
                  <a href={to}>{name}</a>
                ) : (
                  <Link to={to}>{name}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer bottom: copyright + social icons */}
      <div className="footer-bottom-container">
        <div className="social-icons">
          <a href="https://instagram.com/kurmi.ansh.patel" aria-label="Instagram"><FaInstagram className="instagram" /></a>
          <a href="https://www.linkedin.com/in/ansh-katiyar-a992a42aa/" aria-label="LinkedIn"><FaLinkedinIn className="linkedin" /></a>
          <a href="#" aria-label="Twitter"><FaTwitter className="twitter" /></a>
        </div>
        <div className="footer-bottom">
          © Ansh Katiyar All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
