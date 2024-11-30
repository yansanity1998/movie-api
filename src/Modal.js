import React from "react";
import './Modal.css'; 

const Modal = ({ movie, onClose }) => {
    return (
        <div className="ModalOverlay">
            <div className="ModalContent">
                <button className="close-button" onClick={onClose}>✖</button>
                <h2 className="modal-title">{movie.Title}</h2>
                <img src={movie.Poster} alt={movie.Title} className="modal-poster" />
                <p><strong>Year:</strong> {movie.Year}</p>
                <p><strong>Genre:</strong> {movie.Genre}</p>
                <p><strong>Plot:</strong> {movie.Plot}</p>
                <p><strong>Rating:</strong> ⭐{movie.imdbRating}</p>
            </div>
        </div>
    );
}

export default Modal;
