import './App.css';
import React, { useState, useEffect } from "react";
import Movie from "./Movie";
import Modal from "./ModalMovie"; 

const API_key = "3a67b468"; 
const base_url = "https://www.omdbapi.com/";

const App = () => {
  const [movieData, setData] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null); 
  const [searchTerm, setSearchTerm] = useState(""); 

  const fetchMovies = (page = 1) => {
    const searchTerms = ["action", "comedy", "drama", "thriller", "horror"];
    const randomTerm = searchTerms[Math.floor(Math.random() * searchTerms.length)];
    const url = `${base_url}?apikey=${API_key}&s=${randomTerm}&type=movie&page=${page}`;
    
    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (data.Search) {
          setData(prevData => [...prevData, ...data.Search]); 
        } else {
          setData([]); 
        }
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchMovies();
  }, []); 

  const fetchMovieDetails = (id) => {
    fetch(`${base_url}?apikey=${API_key}&i=${id}`) 
      .then(res => res.json())
      .then(data => {
        setSelectedMovie(data); 
      })
      .catch(err => console.error(err));
  };

  const closeModal = () => {
    setSelectedMovie(null);
  };

  const filteredMovies = movieData.filter(movie =>
    movie.Title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <div className="search-container"> 
        <img src="bilibili.png" alt="Logo" className="logo" />
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
        <img src="https://avatarfiles.alphacoders.com/364/364538.png" alt="Profile" className="profile" />
      </div>
      <div className="Container">
        {
          filteredMovies.length === 0 && searchTerm ? (
            <p className="error">Movie Not Found! 🥺</p>
          ) : (
            filteredMovies.map((res) => (
              <Movie info={res} key={res.imdbID} onClick={() => fetchMovieDetails(res.imdbID)} />
            ))
          )
        }
      </div>

      {selectedMovie && (
        <Modal movie={selectedMovie} onClose={closeModal} />
      )}

      {filteredMovies.length > 0 && !searchTerm && (
        <button 
          className="load-more-button" 
          onClick={() => fetchMovies(Math.ceil(movieData.length / 10) + 1)}
        >
          Load More Movies
        </button>
      )}
    </div>
  );
}

export default App;
