import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React, { useState } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import PostForm from './components/PostForm';
import Post from './components/Post';
import Footer from './components/Footer';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />

            <Route
              path="/post"
              element={isLoggedIn ? <Post /> : <Navigate to="/login" />}
            />
        
            <Route path="/" element={isLoggedIn ? <Navigate to="/post" /> : <Navigate to="/login" />} />
            <Route path='/new-post' element={<PostForm/>}/>
          </Routes>
          <Footer/>
      </div>
    </Router>
  );
}

export default App;
