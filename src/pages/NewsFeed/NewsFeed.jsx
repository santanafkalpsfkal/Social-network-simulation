import React, { useEffect } from 'react';
import { Menu, notification } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import Cropper from 'react-easy-crop';
import PostInputPrompt from '../../components/PostInputPrompt/PostInputPrompt';
import PostEditor from '../../components/PostEditor/PostEditor';
import PostItem from '../../components/PostItem/PostItem';
import MyLoader from '../../components/MyLoader/MyLoader';
import getCroppedImg from '../../components/getCroppedImg/getCroppedImg';
import { setPosts, addPost, setLoading } from '../../store/postsSlice';
import customIcon from '../../assets/custom-icon.png'; // Asegúrate de que la ruta sea correcta
import './NewsFeed.css';
import './notificationStyles.css'; // Asegúrate de que el CSS esté importado

const NewsFeed = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const loading = useSelector((state) => state.posts.loading);

  const [isEditing, setIsEditing] = React.useState(false);
  const [postContent, setPostContent] = React.useState('');
  const [privacy, setPrivacy] = React.useState('Público');
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [croppedImage, setCroppedImage] = React.useState(null);
  const [crop, setCrop] = React.useState({ x: 0, y: 0 });
  const [zoom, setZoom] = React.useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = React.useState(null);
  const [showCropper, setShowCropper] = React.useState(false);
  const [selectedVideo, setSelectedVideo] = React.useState(null);
  const [selectedAudio, setSelectedAudio] = React.useState(null);

  useEffect(() => {
    dispatch(setLoading(true));
    setTimeout(() => {
      dispatch(setPosts([
        {
          content: `This was the best performance of the night! The dancers, Choreography, costumes, stage everything! As busy as she is with her tour an then to put this show was amazing. Love her! 😍`,
          privacy: 'Público',
          image: null,
          video: null,
          audio: null
        },
      ]));
      dispatch(setLoading(false));
    }, 3000);
  }, [dispatch]);

  const handlePostChange = (e) => setPostContent(e.target.value);

  const handlePostClick = () => {
    if (postContent.trim() || croppedImage || selectedVideo || selectedAudio) {
      dispatch(setLoading(true));
      dispatch(addPost({ content: postContent.trim(), privacy, image: croppedImage, video: selectedVideo, audio: selectedAudio }));
      setPostContent('');
      setCroppedImage(null);
      setSelectedVideo(null);
      setSelectedAudio(null);
      setIsEditing(false);
      showNotification('success', 'Éxito', 'Tu publicación ha sido agregada al feed.');
      setTimeout(() => dispatch(setLoading(false)), 3000);
    } else {
      showNotification('error', 'Error', 'No puedes publicar una publicación vacía.');
    }
  };

  const handleDropdownClick = (e) => setPrivacy(e.key);

  const privacyMenu = (
    <Menu onClick={handleDropdownClick}>
      <Menu.Item key="Público">Público</Menu.Item>
      <Menu.Item key="Privado">Privado</Menu.Item>
      <Menu.Item key="Solo yo">Solo yo</Menu.Item>
    </Menu>
  );

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setSelectedImage(reader.result);
        setShowCropper(true);
      };
    }
  };

  const handleCropSave = async () => {
    try {
      const croppedImage = await getCroppedImg(selectedImage, croppedAreaPixels);
      setCroppedImage(croppedImage.url);
      setShowCropper(false);
    } catch (e) {
      console.error(e);
      showNotification('error', 'Error', 'No se pudo guardar la imagen recortada.');
    }
  };

  const handleCropCancel = () => {
    setShowCropper(false);
    setSelectedImage(null);
  };

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const videoURL = URL.createObjectURL(file);
      setSelectedVideo(videoURL);
    }
  };

  const handleFunctionChange = () => {
    showNotification('info', 'Información', 'Esta función aun no esta disponible.');
  };

  const showNotification = (type, message, description) => {
    notification[type]({
      message: message,
      description: description,
      placement: 'topRight',
      duration: 4.5,
      className: 'custom-notification', // Aplica la clase personalizada aquí
      icon: <img src={customIcon} alt="Custom Icon" />,
      style: {
        backgroundColor: '#1d1c1c',
      }, // Usa la imagen como ícono
    });
  };

  return (
    <div className="newsfeed-container">
      <div className="post-input-container">
        {isEditing ? (
          <PostEditor
            postContent={postContent}
            handlePostChange={handlePostChange}
            handlePostClick={handlePostClick}
            croppedImage={croppedImage}
            selectedVideo={selectedVideo}
            selectedAudio={selectedAudio}
            handleImageChange={handleImageChange}
            handleVideoChange={handleVideoChange}
            handleFunctionChange={handleFunctionChange}
            privacyMenu={privacyMenu}
            privacy={privacy}
          />
        ) : (
          <PostInputPrompt onClick={() => setIsEditing(true)} />
        )}
      </div>

      {showCropper && (
        <div className="cropper-overlay">
          <div className="cropper-content">
            <div className="cropper-container">
              {selectedImage && (
                <Cropper
                  image={selectedImage}
                  crop={crop}
                  zoom={zoom}
                  aspect={4 / 3}
                  onCropChange={setCrop}
                  onCropComplete={onCropComplete}
                  onZoomChange={setZoom}
                />
              )}
            </div>
            <div className="cropper-buttons">
              <button onClick={handleCropCancel} className="cropper-button cancel-button">Cancel</button>
              <button onClick={handleCropSave} className="cropper-button save-button">Save</button>
            </div>
          </div>
        </div>
      )}

      <div className="posts-list">
        {loading ? (
          <div className="skeleton-loader">
            <MyLoader />
          </div>
        ) : (
          posts && posts.length > 0 ? (
            posts.map((post, index) => (
              <PostItem key={index} post={post} />
            ))
          ) : (
            <p>No posts available</p>
          )
        )}
      </div>
    </div>
  );
};

export default NewsFeed;
