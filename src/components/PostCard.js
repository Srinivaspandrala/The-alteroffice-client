import React from 'react';
import ReactPlayer from 'react-player'; // For embedding YouTube videos

function PostCard({ title, videoUrl, imageUrl ,date,Description}) {
  return (
    <div className="card-container">
      {videoUrl && videoUrl !== "null" ? (        <ReactPlayer url={videoUrl} controls width="100%" height="360px" />

      ) : (
        <img src={imageUrl} alt={`Thumbnail for ${title}`} className="card-image" />
      )}
      
      <div className="card-header">{title}</div>
      <div className="card-content">{Description}</div>
      <div className="card-footer">
        <img width="24" height="24" src="https://img.icons8.com/?size=100&id=82788&format=png&color=000000" alt="facebook-like--v1" className='card-like'/>
        <div className='card-date'>{date}</div>

      </div>
    </div>
  );
}

export default PostCard;
