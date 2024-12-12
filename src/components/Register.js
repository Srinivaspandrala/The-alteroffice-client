import React, { useState } from 'react';
import './Register.css';  

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    if (!username || !email || !password) {
      setError('All fields are required!');
      return;
    }
    setError('');

    try {
      const response = await fetch('https://the-alteroffice-server-w8ou.onrender.com/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Registration successful!');
        // Redirect to login or blog list after successful registration
      } else {
        setError(data.error || 'Registration failed.');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      setError('An error occurred during registration.');
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
      {error && <div className="error-message">{error}</div>}
      <p className='login-account'>
        Already have an account? <a href="/login">Login here</a>
      </p>
    </div>
  );
};

export default Register;
