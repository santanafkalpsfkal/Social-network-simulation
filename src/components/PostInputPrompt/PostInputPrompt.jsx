// components/PostInputPrompt/PostInputPrompt.jsx
import React from 'react';
import AvatarComponent from '../AvatarComponent/AvatarComponent';
import './PostInputPrompt.css';

const PostInputPrompt = ({ onClick }) => (
  <div className="post-input-prompt" onClick={onClick}>
    <AvatarComponent />
    <div className="post-input-prompt-div">
      <input
        type="text"
        readOnly
        value="¿Qué estás pensando?"
        className="post-input-prompt-input"
      />
    </div>
  </div>
);

export default PostInputPrompt;
