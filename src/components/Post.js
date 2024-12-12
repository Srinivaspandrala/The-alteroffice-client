import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostCard from './PostCard';
import Navbar from './Navbar'
import './Post.css';

function Post() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://the-alteroffice-server-w8ou.onrender.com/posts')
      .then(response => setPosts(response.data.posts))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  return (

    <div>
      <Navbar/>
      <div className="blog-list">
        {posts.map(post => (
          <PostCard
            key={post.id}
            title={post.title}
            Description={post.Description?.substring(0, 500)} 
            imageUrl={post.image_url}
            videoUrl = {post.videourl}
            link={`/posts/${post.id}`}
            date={post.date}
          />
        ))}
      </div>
    </div>
  );
}

export default Post;
