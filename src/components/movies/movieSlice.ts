import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  createAction,
} from "@reduxjs/toolkit";
import axios from "axios";

interface Movie {
  id: number;
  title: string;
}

interface MoviesByYear {
  [year: number]: Movie[];
}

interface MovieState {
  moviesByYear: MoviesByYear;
  status: "idle" | "loading" | "succeeded" | "failed";
  currentYear: Number;
}

const initialState: MovieState = {
  moviesByYear: {},
  currentYear: new Date().getFullYear(),
  status: "idle",
};

export const fetchMoviesByGenreAndYear = createAsyncThunk(
  "movies/fetchMoviesByGenreAndYear",
  async ({ genreId, year }: { genreId: number; year: number }) => {
    const params = {
      api_key: "2dca580c2a14b55200e784d157207b4d",
      sort_by: "popularity.desc",
      primary_release_year: year,
      page: 1,
      vote_count: "100",
    };
    if (genreId !== 0) {
      params["with_genres"] = genreId;
    }
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie`,
      { params }
    );

    return { year, movies: response.data.results };
  }
);

export const clearMovies = createAction("movies/clearMovies");

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setCurrentYear: (state, action: PayloadAction<number>) => {
      state.currentYear = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(clearMovies, (state) => {
        state.moviesByYear = {};
      })
      .addCase(fetchMoviesByGenreAndYear.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchMoviesByGenreAndYear.fulfilled,
        (state, action: PayloadAction<{ year: number; movies: Movie[] }>) => {
          state.status = "succeeded";
          state.moviesByYear[action.payload.year] = action.payload.movies;
        }
      )
      .addCase(fetchMoviesByGenreAndYear.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const movieSliceActions = movieSlice.actions;

export default movieSlice;
