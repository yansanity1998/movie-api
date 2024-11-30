import './App.css';
import React, { useState, useEffect } from "react";
import Movie from "./Movie";
import Modal from "./Modal"; 

const API_key = "3a67b468"; 
const base_url = "https://www.omdbapi.com/";
const url = `${base_url}?apikey=${API_key}&s=movie&type=movie`; 

const App = () => {
  const [movieData, setData] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null); 
  const [searchTerm, setSearchTerm] = useState(""); 

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (data.Search) {
          setData(data.Search); 
        } else {
          setData([]); 
        }
      })
      .catch(err => console.error(err));
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
    </div>
  );
}

export default App;
