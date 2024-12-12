import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar'

function PostForm({ onPostCreated }) {
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      alert('Title and content are required');
      return;
    }

    const postData = {
      title,
      image_url: imageUrl,
      Description: description,
      videourl: videoUrl,
      date
    };

    axios.post('https://the-alteroffice-server-w8ou.onrender.com/posts', postData)
      .then(response => {
        onPostCreated();
        setTitle('');
        setImageUrl('');
        setDescription('');
        setVideoUrl('');
        setDate('');
      })
      .catch(error => console.error('Error creating post:', error));
  };

  return (
    <div>
      <Navbar/>
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Create a Post</h2>
      
      <div>
        <label>Title</label>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>


      <div>
        <label>Image URL</label>
        <input type="text" placeholder="Image URL" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
      </div>

      <div>
        <label>Description</label>
        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
      </div>

      <div>
        <label>Video URL</label>
        <input type="text" placeholder="Video URL" value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)} />
      </div>

      
      <div>
        <label>Date</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      </div>

      <button type="submit" className="btn-submit">Create Post</button>
    </form>
    </div>
  );
}

export default PostForm;
