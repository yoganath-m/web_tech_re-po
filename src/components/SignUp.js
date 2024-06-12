import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const SignUp = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Sign Up for Spotify</h1>
        <form>
          <input type="text" placeholder="Email address" required />
          <input type="text" placeholder="Confirm email address" required />
          <input type="text" placeholder="Password" required />
          <input type="text" placeholder="What should we call you?" required />
          <button type="submit">SIGN UP</button>
        </form>
        <p>Have an account? <button onClick={handleLoginClick} className="link-button">LOG IN</button></p>
      </div>
    </div>
  );
};

export default SignUp;
