import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* Column 1 */}
        <div className="footer-section">
          <h2>Asad Mehmood</h2>
          <p>
            Frontend Developer passionate about building modern, responsive web applications using React, HTML, CSS, and JavaScript.
          </p>
        </div>

        {/* Column 2 */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="https://github.com/asadjanjua" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-section">
          <h3>Get in Touch</h3>
          <p>Email: asad012.am@gmail.com</p>
          <p>Phone: +92 320 8414832</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Asad Mehmood. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;