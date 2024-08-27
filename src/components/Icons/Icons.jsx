// src/components/Icons/Icons.jsx
import React from 'react';
import { Badge } from 'antd';
import { BellOutlined, VideoCameraOutlined } from '@ant-design/icons';
import './Icons.css';
import avatarImg from '../../assets/avatar.jpg'; // Asegúrate de que la ruta sea correcta

const Icons = () => {
  return (
    <div className="icons">
      <VideoCameraOutlined className="record-icon" />
      <Badge count={2} style={{ backgroundColor: '#f5222d' }}>
        <div className="notification-icon">
          <BellOutlined style={{ color: '#ffffff' }} />
        </div>
      </Badge>
      <div className="avatar-wrapper">
        <img src={avatarImg} alt="Avatar" className="avatar" />
      </div>
    </div>
  );
};

export default Icons;
