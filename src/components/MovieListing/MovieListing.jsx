import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
  getAllMovies,
  getAllShows,
  removeMovies,
  removeShows,
} from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";
import Spinner from "../Spinner/Spinner";
import Slider from "react-slick";
import { Settings } from "../../common/settings";
import { FaSearch } from "react-icons/fa";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);

  const [moviesTerm, setMoviesTerm] = useState("");
  const [showsTerm, setShowsTerm] = useState("");
  const [show, setShow] = useState("Movies");
  const dispatch = useDispatch();

  const submitHandlerMovies = (e) => {
    e.preventDefault();
    setShow("Movies");
    dispatch(removeMovies());
    dispatch(fetchAsyncMovies(moviesTerm));
    setMoviesTerm("");
  };

  const submitHandlerShows = (e) => {
    e.preventDefault();
    setShow("Shows");
    dispatch(removeShows());
    dispatch(fetchAsyncShows(showsTerm));
    setShowsTerm("");
  };

  let renderMovies = "";
  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, i) => <MovieCard key={i} movie={movie} />)
    ) : (
      <div className="movies_error">
        <h3>{movies.error}</h3>
      </div>
    );

  let renderShows = "";
  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((movie, i) => <MovieCard key={i} movie={movie} />)
    ) : (
      <div className="movies_error">
        <h3>{shows.error}</h3>
      </div>
    );
  return (
    <>
      <div className="movie_wrapper">
        <div className="toggle">
          <button
            className={show === "Movies" ? "active" : "not_active"}
            onClick={() => setShow("Movies")}
          >
            Movies
          </button>
          <button
            className={show === "Shows" ? "active" : "not_active"}
            onClick={() => setShow("Shows")}
          >
            TV Series
          </button>
          <button
            className={show === "Both" ? "active" : "not_active"}
            onClick={() => setShow("Both")}
          >
            Both
          </button>
        </div>
        {show === "Movies" ? (
          <div className="movie_list">
            <div className="search_container">
              <h2>Movies</h2>
              <div className="search_bar">
                <form onSubmit={submitHandlerMovies}>
                  <input
                    type="text"
                    value={moviesTerm}
                    onChange={(e) => setMoviesTerm(e.target.value)}
                    placeholder="Search for Movies... "
                  />
                  <button type="submit">
                    <FaSearch />
                  </button>
                </form>
              </div>
            </div>
            {Object.keys(movies).length === 0 ? (
              <Spinner />
            ) : (
              <>
                <div className="slider">
                  <Slider {...Settings}>
                    {movies.Search.map((movie) => (
                      <div>
                        {" "}
                        <img src={movie.Poster} alt={movie.Title} />
                      </div>
                    ))}
                  </Slider>
                </div>
                <div className="movie_container">{renderMovies}</div>
              </>
            )}
          </div>
        ) : show === "Shows" ? (
          <div className="show_list">
            <div className="search_container">
              <h2>Shows</h2>
              <div className="search_bar">
                <form onSubmit={submitHandlerShows}>
                  <input
                    type="text"
                    value={showsTerm}
                    onChange={(e) => setShowsTerm(e.target.value)}
                    placeholder="Search for Shows... "
                  />
                  <button type="submit">
                    <FaSearch />
                  </button>
                </form>
              </div>
            </div>
            {Object.keys(shows).length === 0 ? (
              <Spinner />
            ) : (
              <>
                <div className="slider">
                  <Slider {...Settings}>
                    {shows.Search.map((show) => (
                      <div>
                        {" "}
                        <img src={show.Poster} alt={show.Title} />
                      </div>
                    ))}
                  </Slider>
                </div>
                <div className="movie_container">{renderShows}</div>
              </>
            )}
          </div>
        ) : show === "Both" ? (
          <>
            <div className="movie_list">
              <div className="search_container">
                <h2>Movies</h2>
                <div className="search_bar">
                  <form onSubmit={submitHandlerMovies}>
                    <input
                      type="text"
                      value={moviesTerm}
                      onChange={(e) => setMoviesTerm(e.target.value)}
                      placeholder="Search for Movies... "
                    />
                    <button type="submit">
                      <FaSearch />
                    </button>
                  </form>
                </div>
              </div>
              {Object.keys(movies).length === 0 ? (
                <Spinner />
              ) : (
                <>
                  <div className="slider">
                    <Slider {...Settings}>
                      {movies.Search.map((movie) => (
                        <div>
                          {" "}
                          <img src={movie.Poster} alt={movie.Title} />
                        </div>
                      ))}
                    </Slider>
                  </div>
                  <div className="movie_container">{renderMovies}</div>
                  <div className="show_list">
                    <div className="search_container">
                      <h2>Shows</h2>
                      <div className="search_bar">
                        <form onSubmit={submitHandlerShows}>
                          <input
                            type="text"
                            value={showsTerm}
                            onChange={(e) => setShowsTerm(e.target.value)}
                            placeholder="Search for Shows... "
                          />
                          <button type="submit">
                            <FaSearch />
                          </button>
                        </form>
                      </div>
                    </div>
                    {Object.keys(shows).length === 0 ? (
                      <Spinner />
                    ) : (
                      <>
                        <div className="slider">
                          <Slider {...Settings}>
                            {shows.Search.map((show) => (
                              <div>
                                {" "}
                                <img src={show.Poster} alt={show.Title} />
                              </div>
                            ))}
                          </Slider>
                        </div>
                        <div className="movie_container">{renderShows}</div>
                      </>
                    )}
                  </div>
                </>
              )}
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default MovieListing;
