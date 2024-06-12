import React from 'react';
import { useParams } from 'react-router-dom';
import './MusicPlayer.css';
import image4 from '../components/a8.jpg';

const MusicPlayer = () => {
  const { id } = useParams();

  return (
    <div className="music-player-page">
      <h2>Now Playing: Playlist ID {id}</h2>
      <div className="music-player-container">
        <div className="music-info">
          <img src={image4} alt={`Playlist ${id}`} />
          <h3>Playlist {id}</h3>
          <p>Description of playlist {id}</p>
        </div>
        <div className="player-controls">
          <button>Play</button>
          <button>Pause</button>
          <button>Next</button>
          <button>Previous</button>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
