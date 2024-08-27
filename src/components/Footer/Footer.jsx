import React from 'react';
import './Footer.css';
import Logo from '../Logo/Logo'; // Asegúrate de que el componente Logo esté disponible
import { FacebookOutlined, InstagramOutlined, TwitterOutlined } from '@ant-design/icons';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
          <Logo /> {/* Muestra el logo aquí */}
        </div>
        <div className="footer-info">
          <div className="footer-social">
            <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FacebookOutlined />
            </a>
            <a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer" className="social-icon">
              <InstagramOutlined />
            </a>
            <a href="https://twitter.com/yourpage" target="_blank" rel="noopener noreferrer" className="social-icon">
              <TwitterOutlined />
            </a>
          </div>
          <p>&copy; 2024 Your Company. All rights reserved.</p>
          <p>Contact us: <a href="mailto:info@yourcompany.com">info@yourcompany.com</a></p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
