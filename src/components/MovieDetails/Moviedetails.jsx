import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchAsyncMovieOrShowDetails,
  getSelectedMovieOrShow,
  removeSelectedMovieOrShow,
} from "../../features/movies/movieSlice";
import { FaCalendarAlt, FaFilm, FaStar, FaThumbsUp } from "react-icons/fa";
import "./MovieDetails.scss";
import Spinner from "../Spinner/Spinner";

export const Moviedetails = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieOrShow);
  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetails(imdbID));
    return () => {
      dispatch(removeSelectedMovieOrShow());
    };
  }, [dispatch, imdbID]);
  return (
    <>
      {Object.keys(data).length === 0 ? (
        <Spinner />
      ) : (
        <div className="movie_section">
          <div className="section_left">
            <div className="movie_title">{data.Title}</div>
            <div className="movie_rating">
              <span>
                IMDB Rating{" "}
                <FaStar style={{ margin: "0 3px", color: "#ff9e00" }} />:{" "}
                {data.imdbRating}
              </span>
              <span>
                IMDB Votes{" "}
                <FaThumbsUp style={{ margin: "0 3px", color: "#fafafa" }} />:{" "}
                {data.imdbVotes}
              </span>
              <span>
                Runtime{" "}
                <FaFilm
                  style={{ margin: "0 3px", color: "rgb(191, 213, 214)" }}
                />{" "}
                : {data.Runtime}
              </span>
              <span>
                Year{" "}
                <FaCalendarAlt
                  style={{ margin: "0 3px", color: "peachpuff" }}
                />
                : {data.Year}
              </span>
            </div>
            <div className="movie_plot">{data.Plot}</div>
            <div className="movie_info">
              <div>
                <span>Director</span>
                <span>{data.Director}</span>
              </div>
              <div>
                <span>Stars</span>
                <span>{data.Actors}</span>
              </div>
              <div>
                <span>Genre</span>
                <span>{data.Genre}</span>
              </div>
              <div>
                <span>Languages</span>
                <span>{data.Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{data.Awards}</span>
              </div>
            </div>
          </div>
          <div className="section_right">
            <img src={data.Poster} alt={data.Title} />
          </div>
        </div>
      )}
    </>
  );
};
