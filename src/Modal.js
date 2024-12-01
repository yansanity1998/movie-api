import React, { useState, useEffect } from "react";
import './Modal.css'; 

const Modal = ({ movie, onClose }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true); 
    }, []);

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
                <p><strong>Plot:</strong> {movie.Plot}</p>
                <p><strong>Ratings:</strong> ⭐{movie.imdbRating}</p>
            </div>
        </div>
    );
}

export default Modal;
