import React from 'react';
import { Link } from 'react-router-dom';
import facebookIcon from '../assets/icons8-facebook-96.png';
import instagramIcon from '../assets/icons8-instagram-96.png';
import tiktokIcon from '../assets/icons8-tiktok-96.png';
import twitterIcon from '../assets/icons8-twitter-96.png';
import youtubeIcon from '../assets/icons8-youtube-96.png';


function Footer() {
  return (
    <footer className="footer">
      <ul className="footer-links">
        <li><Link to="/terms">Terms of Use</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/privacy">Privacy Policy</Link></li>
        <li><Link to="/cookies">Cookies</Link></li>
        <li><Link to="/accessibility">Accessibility Help</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
      <div className="footer-social">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={twitterIcon} alt="Twitter" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={facebookIcon} alt="Facebook" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" />
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
          <img src={tiktokIcon} alt="TikTok" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <img src={youtubeIcon} alt="YouTube" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;