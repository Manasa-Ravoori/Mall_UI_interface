import React, { useState } from 'react';
import { Rating, AccordionDetails, Typography } from '@mui/material';
import './MovieWebsite.css'; // Import specific styles for MovieWebsite

function MovieWebsite() {
    // Example data (you can fetch this from an API or define locally)
    const movies = [
        { id: 1, title: 'SCREEN 1', description: 'KALKI 2898 AD', trailerUrl: 'https://www.youtube.com/embed/BfCIPsEGAS8', rating: 4.5, showTimings: ['10:00 AM', '1:00 PM', '4:00 PM'] },
        { id: 2, title: 'SCREEN 2', description: 'UNDER PARIS', trailerUrl: 'https://www.youtube.com/embed/rYwUjjsNJVw', rating: 4.5, showTimings: ['11:00 AM', '2:00 PM', '5:00 PM'] },
        { id: 3, title: 'SCREEN 3', description: 'DEADPOOL & WOLVERINE', trailerUrl: 'https://www.youtube.com/embed/73_1biulkYk', rating: 4.5, showTimings: ['12:00 PM', '3:00 PM', '6:00 PM'] },
        { id: 4, title: 'SCREEN 4', description: 'INSIDE OUT 2', trailerUrl: 'https://www.youtube.com/embed/LEjhY15eCx0', rating: 4.5, showTimings: ['10:30 AM', '1:30 PM', '4:30 PM'] },
        { id: 5, title: 'SCREEN 5', description: 'BAD BOYS: RIDE OR DIE', trailerUrl: 'https://www.youtube.com/embed/hRFY_Fesa9Q', rating: 4.5, showTimings: ['11:30 AM', '2:30 PM', '5:30 PM'] },
        { id: 6, title: 'SCREEN 6', description: 'TWISTERS', trailerUrl: 'https://www.youtube.com/embed/Jm27YjLnPHc', rating: 3.5, showTimings: ['12:30 PM', '3:30 PM', '6:30 PM'] },
        // Add more movies as needed
    ];

    // State to manage show timings visibility for each movie
    const [showTimings, setShowTimings] = useState({});

    // Function to toggle show timings visibility for a movie
    const toggleShowTimings = (id) => {
        setShowTimings(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    return (
        <div className="movie-website">
            <h2>NOW SHOWING AT VANCOUVER CITY CENTER</h2>
            <div className="movie-list">
                {movies.map(movie => (
                    <div key={movie.id} className="movie-item">
                        <h3>{movie.title}</h3>
                        <p>{movie.description}</p>
                        <div className="trailer">
                            <iframe
                                title={`Trailer for ${movie.title}`}
                                width="100%"
                                height="315"
                                src={movie.trailerUrl}
                                frameBorder="0"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="rating-container">
                            <Rating name="read-only" value={movie.rating} readOnly />
                        </div>
                        <button
                            className="show-timings-btn"
                            onClick={() => toggleShowTimings(movie.id)}
                        >
                            {showTimings[movie.id] ? 'Hide Timings' : 'Show Timings'}
                        </button>
                        {showTimings[movie.id] && (
                            <div className="show-timings">
                                  <AccordionDetails>
                                  <Typography>{movies.showTimings}</Typography>
                                  <h4>Show Timings:</h4>
                                <ul>
                                    {movie.showTimings.map((time, index) => (
                                        <li key={index}>{time}</li>
                                    ))}
                                </ul>
                                </AccordionDetails>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MovieWebsite;
