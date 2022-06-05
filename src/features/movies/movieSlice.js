import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {
    try {
      const { data } = await movieApi.get(
        `?apikey=${APIKey}&s=${term}&type=movie`
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (term) => {
    try {
      const { data } = await movieApi.get(
        `?apikey=${APIKey}&s=${term}&type=series`
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const fetchAsyncMovieOrShowDetails = createAsyncThunk(
  "movies/fetchAsyncMovieOrShowDetails",
  async (id) => {
    try {
      const { data } = await movieApi.get(
        `?apikey=${APIKey}&i=${id}&plot=full`
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  movies: {},
  shows: {},
  selectedMovieOrShow: {},
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    removeSelectedMovieOrShow: (state) => {
      state.selectedMovieOrShow = {};
    },
    removeMovies: (state) => {
      state.movies = {};
    },
    removeShows: (state) => {
      state.shows = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => console.log("pending"),
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("fetched successfully");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => console.log("rejected"),
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("fetched successfully");
      return { ...state, shows: payload };
    },
    [fetchAsyncMovieOrShowDetails.fulfilled]: (state, { payload }) => {
      console.log("fetched successfully");
      return { ...state, selectedMovieOrShow: payload };
    },
  },
});

export const { removeSelectedMovieOrShow, removeMovies, removeShows } =
  movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) =>
  state.movies.selectedMovieOrShow;
export default movieSlice.reducer;
