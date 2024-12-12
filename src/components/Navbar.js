import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Navbar.css';

function Navbar({ userId }) {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const response = await axios.get(`https://the-alteroffice-server-w8ou.onrender.com/${userId}`);
        setUsername(response.data.username); 
      } catch (error) {
        console.error('Error fetching username:', error);
      }
    };

    fetchUsername();
  }, [userId]);

  return (
    <nav className="Navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/new-post">Create Post</Link>
        </li>
        <li>
          <p style={{ color: 'white' }}>{username}</p>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
