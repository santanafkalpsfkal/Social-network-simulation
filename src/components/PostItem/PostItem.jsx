import React from 'react';
import { Divider, notification } from 'antd';
import { CheckCircleOutlined, FireOutlined, GlobalOutlined, EllipsisOutlined } from '@ant-design/icons';
import AvatarComponent from '../AvatarComponent/AvatarComponent';
import './PostItem.css';
import '../../pages/NewsFeed/notificationStyles.css'; // Importa los estilos personalizados de notificación

// Importa las imágenes desde tu carpeta de assets
import likeIcon from '../../assets/like-icon.png';
import commentIcon from '../../assets/comment-icon.png';
import shareIcon from '../../assets/share-icon.png';
import customIcon from '../../assets/custom-icon.png'; // Asegúrate de que la ruta sea correcta

// Función para mostrar las notificaciones
const showNotification = (type, action) => {
  notification[type]({
    message: `${action} No Disponible`,
    description: `La función de ${action.toLowerCase()} aún no está disponible.`,
    placement: 'bottomRight',
    duration: 3,
    style: {
      backgroundColor: '#1a1a1a', /* Fondo gris oscuro */
    },
    icon: <img src={customIcon} alt="Custom Icon" style={{ width: 24, height: 24 }} />, // Usa la imagen como ícono
    className: 'custom-notification', // Aplica la clase personalizada
  });
};

const PostItem = ({ post }) => (
  <div className="post-item">
    <div className="row">
      <AvatarComponent />
      <h5>Artist Name</h5>
      <CheckCircleOutlined />
      <FireOutlined />
      <h6>.</h6>
      <h6>now</h6>
      <GlobalOutlined />
      <span className="privacy-tag">({post.privacy})</span>
      <div className="icon-group">
        <EllipsisOutlined />
      </div>
    </div>
    <div className="post-item-content">
      {post.content}
      {post.image && (
        <div className="post-image" style={{ backgroundImage: `url(${post.image})` }}>
          {/* Puedes agregar contenido adicional aquí si es necesario */}
        </div>
      )}
      {post.video && (
        <div className="post-video">
          <div className="video-wrapper">
            <video controls>
              <source src={post.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
      {post.audio && (
        <div className="post-audio">
          <audio controls>
            <source src={post.audio} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </div>
    <Divider className="divider" />
    <div className='row-actions'>
      <div className='post-action' onClick={() => showNotification('info', 'Like')}>
        <img src={likeIcon} alt="Like" className="action-icon" />
        <span>10 Likes</span>
      </div>
      <div className='post-action' onClick={() => showNotification('info', 'Comment')}>
        <img src={commentIcon} alt="Comment" className="action-icon" />
        <span>9 Comments</span>
      </div>
      <div className='post-action' onClick={() => showNotification('info', 'Share')}>
        <img src={shareIcon} alt="Share" className="action-icon" />
        <span>2 Shares</span>
      </div>
    </div>
  </div>
);

export default PostItem;
