import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Playlist.css';
import image1 from '../components/a5.jpg';
import image2 from '../components/a6.jpg';
import image3 from '../components/a7.jpg';
import image4 from '../components/a8.jpg';
import image5 from '../components/a9.jpeg';
import image6 from '../components/a10.jpg';
import image7 from '../components/a11.jpg';

const Playlist = () => {
  const navigate = useNavigate();

  const playlists = [
    { id: 1, name: "Today's Top Hits", description: "Rema & Selena Gomez are on top of the...", image: image1 },
    { id: 2, name: 'RapCaviar', description: 'New Music from Lil Baby, Juice WRLD an...', image: image2 },
    { id: 3, name: 'All out 2010s', description: 'The biggest songs of the 2010s. Cover...', image: image3 },
    { id: 4, name: 'Rock Classics', description: 'Rock Legends & epic songs that continue t...', image: image4 },
    { id: 5, name: 'Peaceful Piano', description: 'Relax and indulge with beautiful piano pieces', image: image5 },
    { id: 6, name: 'Deep Focus', description: 'Keep calm and focus with ambient and pos...', image: image6 },
    { id: 7, name: 'Instrumental Study', description: 'Focus with soft study music in the...', image: image7 }
  ];

  const handleClick = (id) => {
    navigate(`/music-player/${id}`);
  };

  return (
    <div className="playlist-page">
      <div className="sidebar">
        <div className="logo">Spotify</div>
        <nav>
          <a href="#" onClick={() => navigate('/')}>Home</a>
          <a href="#" onClick={() => navigate('/search')}>Search</a> {/* Add Search link */}
          <a href="#" onClick={() => navigate('/playlist')}>Your Library</a>
          <a href="#" onClick={() => navigate('/create-playlist')}>Create Playlist</a>
          <a href="#" onClick={() => navigate('/liked-songs')}>Liked Songs</a>
        </nav>
        <div className="footer-links">
          <a href="#" onClick={() => navigate('/cookies')}>Cookies</a>
          <a href="#" onClick={() => navigate('/privacy')}>Privacy</a>
        </div>
      </div>
      <div className="main-content">
        <div className="header">
          <div className="logo">Spotify Playlists</div>
          <div className="nav-links">
            <a href="#" onClick={() => navigate('/premium')}>Premium</a>
            <a href="#" onClick={() => navigate('/support')}>Support</a>
            <a href="#" onClick={() => navigate('/download')}>Download</a>
          </div>
        </div>
        <div className="playlist-container">
          <h2>Spotify Playlists</h2>
          <div className="playlists">
            {playlists.slice(0, 4).map((playlist) => (
              <div key={playlist.id} className="playlist-item" onClick={() => handleClick(playlist.id)}>
                <img src={playlist.image} alt={playlist.name} />
                <h3>{playlist.name}</h3>
                <p>{playlist.description}</p>
              </div>
            ))}
          </div>
          <h2>Focus</h2>
          <div className="playlists">
            {playlists.slice(4).map((playlist) => (
              <div key={playlist.id} className="playlist-item" onClick={() => handleClick(playlist.id)}>
                <img src={playlist.image} alt={playlist.name} />
                <h3>{playlist.name}</h3>
                <p>{playlist.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playlist;
