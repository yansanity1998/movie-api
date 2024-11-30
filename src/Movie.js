import React from "react";

const Movie = ({ info, onClick }) => {
    return (
        <div className="Movie" onClick={onClick}>
            <img src={info.Poster} alt={info.Title} className="poster" />
            <div className="movie-title">
                <span className="rating">{info.imdbRating}</span>
                {info.Title}
            </div> 
        </div>
    );
};

export default Movie;
