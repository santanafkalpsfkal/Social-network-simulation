// components/AvatarComponent/AvatarComponent.jsx
import React from 'react';
import avatar from '../../assets/avatar.jpg';
import './AvatarComponent.css';

const AvatarComponent = ({ size = "default" }) => (
  <img src={avatar} alt="Avatar" className={`avatar avatar-${size}`} />
);

export default AvatarComponent;
