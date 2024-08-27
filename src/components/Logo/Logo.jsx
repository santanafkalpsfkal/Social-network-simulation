// src/components/Logo/Logo.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'; // Ruta a tu imagen de logo
import './Logo.css'; // Si necesitas estilos específicos para el logo

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <img src={logo} alt="Logo" className="logo-image" />
      </Link>
    </div>
  );
};

export default Logo;
