import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.scss";

const MovieCard = ({ movie }) => {
  return (
    <div className="card_item">
      <Link to={`/movie/${movie.imdbID}`}>
        <div className="card_inner">
          <div className="card_top">
            <img src={movie.Poster} alt={movie.Title} />
          </div>
          <div className="card_bottom">
            <div className="card_info">
              <h4>{movie.Title}</h4>
              <p>{movie.Year}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
