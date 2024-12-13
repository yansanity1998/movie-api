import React from "react";

const Movie = ({ info, onClick }) => {
    return (
        <div className="Movie" onClick={onClick}>
            <img src={info.Poster} alt={info.Title} className="poster" />
            <div className="movie-details">
                <div className="movie-title">{info.Title}</div>
                <div className="movie-meta">
                    <span className="rating">⭐{info.imdbRating}</span>
                    <span className="year">({info.Year})</span>
                </div>
            </div>
        </div>
    );
};

export default Movie;
