import React from 'react';
import { Button, Dropdown, Alert } from 'antd';
import DownOutlined from '@ant-design/icons/DownOutlined';
import AvatarComponent from '../AvatarComponent/AvatarComponent';
import './PostEditor.css';

// Importar las imágenes desde assets
import imageIcon from '../../assets/image-icon.png';
import videoIcon from '../../assets/video-icon.png';
import audioIcon from '../../assets/audio-icon.png';
import tagIcon from '../../assets/tag-icon.png';

const PostEditor = ({
  postContent,
  handlePostChange,
  handlePostClick,
  croppedImage,
  selectedVideo,
  selectedAudio,
  handleImageChange,
  handleVideoChange,
  handleFunctionChange,
  privacyMenu,
  privacy,
  alertMessage,
  alertType,
}) => (
  <div className="post-editor">
    <div className="row">
      <AvatarComponent />
      <div className="Text-area-div">
        <textarea
          value={postContent}
          onChange={handlePostChange}
          placeholder="Escribe tu publicación aquí..."
          onKeyPress={(e) => { if (e.key === 'Enter') handlePostClick(); }}
          className="Text-area-input"
        />
      </div>
    </div>

    {/* Vista previa de la imagen recortada */}
    {croppedImage && (
      <div className="preview-container">
        <img src={croppedImage} alt="Cropped" />
      </div>
    )}

    {/* Vista previa del video */}
    {selectedVideo && (
      <div className="video-preview">
        <video controls width="300">
          <source src={selectedVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    )}

    {/* Vista previa del audio */}
    {selectedAudio && (
      <div className="audio-preview">
        <audio controls>
          <source src={selectedAudio} type="audio/mp3" />
        </audio>
      </div>
    )}

    <div className="post-controls">
      <div className="media-icons">
        <span>Agrega</span>
        <Button className="image-icon" title="Añadir imagen">
          <img src={imageIcon} alt="Imagen" />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </Button>
        <Button className="video-icon" title="Añadir video">
          <img src={videoIcon} alt="Video" />
          <input
            type="file"
            accept="video/*"
            onChange={handleVideoChange}
          />
        </Button>
        <Button className="audio-icon" title="Añadir audio" onClick={handleFunctionChange}>
          <img src={audioIcon} alt="Audio" />
        </Button>
        <Button className="tag-icon" title="Añadir tag" onClick={handleFunctionChange}>
          <img src={tagIcon} alt="tag" />
        </Button>
      </div>
      <div className='buttons'>
        <Dropdown overlay={privacyMenu} trigger={['click']}>
          <Button>
            {privacy} <DownOutlined />
          </Button>
        </Dropdown>
        <Button
          type="primary"
          onClick={handlePostClick}
        >
          Post
        </Button>
      </div>
    </div>
    {alertMessage && (
      <Alert
        message={alertMessage}
        type={alertType}
        showIcon
        closable
        className="post-alert"
      />
    )}
  </div>
);

export default PostEditor;
