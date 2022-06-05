import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";
import MovieListing from "../MovieListing/MovieListing";

const Home = () => {
  const dispatch = useDispatch();
  const movieText = "Harry";
  const showText = "Naruto";
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showText));
  }, []);

  return (
    <div className="home_container">
      <div className="banner_image">
        <MovieListing />
      </div>
    </div>
  );
};

export default Home;
