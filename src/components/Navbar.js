import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  return (
    <nav className='Navbar'>
      <ul>
        <li >
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/new-post" >Create Post</Link>
        </li>
      </ul>
    </nav>
  );
}
  
export default Navbar;
