import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Import brand icons
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>NewsHub</h3>
                    <p>Your trusted source for the latest news and updates from around the world.</p>
                </div>
                
                <div className="footer-section">
                    <h4>Categories</h4>
                    <ul>
                        <li><Link to="/general">General</Link></li>
                        <li><Link to="/business">Business</Link></li>
                        <li><Link to="/technology">Technology</Link></li>
                        <li><Link to="/sports">Sports</Link></li>
                    </ul>
                </div>
                
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/entertainment">Entertainment</Link></li>
                        <li><Link to="/health">Health</Link></li>
                        <li><Link to="/science">Science</Link></li>
                    </ul>
                </div>
                
                <div className="footer-section">
                    <h4>Connect With Us</h4>
                    <div className="social-links">
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} /> {/* Use imported icon */}
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} /> {/* Use imported icon */}
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} /> {/* Use imported icon */}
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} NewsHub. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;