import React, { useState, useEffect } from "react";
import './ModalMovie.css'; 

const Modal = ({ movie, onClose }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [cast, setCast] = useState([]);

    useEffect(() => {
        setIsVisible(true);
        if (movie.Actors) {
            setCast(movie.Actors.split(", ")); 
        }
    }, [movie]);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(onClose, 100); 
    };

    return (
        <div className="ModalOverlay">
            <div className={`ModalContent ${isVisible ? "visible" : ""}`}>
                <button className="close-button" onClick={handleClose}>✖</button>
                <h2 className="modal-title">{movie.Title}</h2>
                <img src={movie.Poster} alt={movie.Title} className="modal-poster" />
                <p><strong>Year:</strong> {movie.Year}</p>
                <p><strong>Genre:</strong> {movie.Genre}</p>
                <p><strong>Duration:</strong> ⏳{movie.Runtime ? movie.Runtime : "N/A"}</p>
                <p><strong>Cast:</strong> {cast.length > 0 ? cast.join(", ") : "N/A"}</p>
                <p><strong>Synopsis:</strong> {movie.Plot}</p>
                <p><strong>Ratings:</strong> ⭐{movie.imdbRating} /10</p>
            </div>
        </div>
    );
}

export default Modal;
