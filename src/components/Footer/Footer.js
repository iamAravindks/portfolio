import React from "react";
import './Footer.css'; // Import the CSS file for styles

function Footer() {
	return (
		<footer className="footer-container">
      <div className="social-icons">
        <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer">
          <img src={require("../../assets/logos/linkedin-logo.png")} alt="LinkedIn" />
        </a>
        <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
          <img src={require("../../assets/logos/github-logo.png")} alt="GitHub" />
        </a>
        <a href="https://stackoverflow.com/users/your-userid" target="_blank" rel="noopener noreferrer">
          <img src={require("../../assets/logos/stackoverflow.png")} alt="Stack Overflow" />
        </a>
      </div>
    </footer>
		
	);
}

export default Footer;
