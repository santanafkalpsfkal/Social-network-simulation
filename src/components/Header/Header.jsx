import React from 'react';
import { notification } from 'antd';
import Logo from '../Logo/Logo';
import Icons from '../Icons/Icons';
import SearchInput from '../SearchInput/SearchInput';
import '../../pages/NewsFeed/notificationStyles.css'; // Importa el archivo CSS
import './Header.css';
import customIcon from '../../assets/custom-icon.png'; // Asegúrate de que la ruta sea correcta

const Header = () => {
  const handleAlert = (pageName) => {
    notification.info({
      message: `Página No Disponible`,
      description: `La página ${pageName} aún no está disponible.`,
      placement: 'bottomRight',
      duration: 3,
      style: {
        backgroundColor: '#1a1a1a', /* Fondo gris oscuro */
      },
      icon: <img src={customIcon} alt="Custom Icon" style={{ width: 24, height: 24 }} />, // Usa la imagen como ícono
      className: 'custom-notification', // Aplica la clase personalizada
    });
  };

  return (
    <header>
      <div className="left-section">
        <Logo />
        <nav className="nav-links">
          <a href="#" onClick={() => handleAlert('Brodcasts')}>Brodcasts</a>
          <a href="#" onClick={() => handleAlert('Virtual Events')}>Virtual Events</a>
          <a href="#" onClick={() => handleAlert('Artists')}>Artists</a>
          <a href="#" onClick={() => handleAlert('Klipwall')}>Klipwall</a>
        </nav>
      </div>
      <div className="search-container">
        <SearchInput />
      </div>
      <div className="icons">
        <Icons />
      </div>
    </header>
  );
};

export default Header;
