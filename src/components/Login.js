// src/Login.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here, for now, we'll directly navigate to the playlist page
    navigate('/playlist');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Spotify</h1>
        <form onSubmit={handleLoginSubmit}>
          <input type="text" placeholder="Email address or username" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">LOG IN</button>
        </form>
        <a href="#">Forgot your password?</a>
        <div className="divider">OR</div>
        <button className="facebook-btn">CONTINUE WITH FACEBOOK</button>
        <button className="google-btn">CONTINUE WITH GOOGLE</button>
        <button className="apple-btn">CONTINUE WITH APPLE</button>
        <p>Don't have an account? <a href="/signup">SIGN UP FOR SPOTIFY</a></p>
      </div>
    </div>
  );
};

export default Login;
