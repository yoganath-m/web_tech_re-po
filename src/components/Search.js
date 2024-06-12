import React, { useState } from 'react';
import './Search.css';
import image1 from '../components/se.jpg';
import image2 from '../components/a1.jpg';
import image3 from '../components/a2.jpg';
import image4 from '../components/ad.jpg';
import image5 from '../components/asdf.jpg';
import image6 from '../components/azs.jpg';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const exampleData = [
    { id: 2, name: 'Rockstar', artist: 'DaBaby', image: image1 },
    { id: 3, name: 'Watermelon Sugar', artist: 'Harry Styles', image: image2 },
    { id: 4, name: 'Levitating', artist: 'Dua Lipa', image: image3 },
    { id: 5, name: 'Peaches', artist: 'Justin Bieber', image: image4 },
    { id: 6, name: 'Save Your Tears', artist: 'The Weeknd', image: image5 },
    { id: 7, name: 'Blinding Lights', artist: 'The Weeknd', image: image6 }
  ];

  const handleSearch = (event) => {
    event.preventDefault();
    const filteredResults = exampleData.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.artist.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filteredResults);
  };

  return (
    <div className="search-page">
      <div className="search-bar">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for songs, artists, playlists..."
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="search-results">
        <h2>{query ? 'Search Results' : 'Recommended Songs'}</h2>
        {query ? (
          results.length > 0 ? (
            results.map(result => (
              <div key={result.id} className="search-item">
                <img src={result.image} alt={result.name} />
                <div>
                  <h3>{result.name}</h3>
                  <p>{result.artist}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No results found.</p>
          )
        ) : (
          exampleData.map(item => (
            <div key={item.id} className="search-item">
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>{item.artist}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Search;
