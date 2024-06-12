import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Playlist from './components/Playlist';
import MusicPlayer from './components/MusicPlayer';
import Search from './components/Search'; // Import the Search component

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route for SignUp component */}
          <Route path="/signup" element={<SignUp />} />

          {/* Route for Playlist component */}
          <Route path="/playlist" element={<Playlist />} />

          {/* Route for Search component */}
          <Route path="/search" element={<Search />} />

          {/* Route for MusicPlayer component with dynamic :id parameter */}
          <Route path="/music-player/:id" element={<MusicPlayer />} />

          {/* Default route for Login component */}
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
