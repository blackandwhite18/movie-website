// genresSlice.ts

import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { GenresState } from "./types";

const initialState: GenresState = {
  genres: [],
  loading: "idle",
  error: null,
  selectedGenreId: 0,
};

export const fetchGenres = createAsyncThunk("genres/fetchGenres", async () => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/genre/movie/list",
    {
      params: {
        api_key: "2dca580c2a14b55200e784d157207b4d",
      },
    }
  );

  return response.data.genres;
});

const genresSlice = createSlice({
  name: "genres",
  initialState,
  reducers: {
    selectGenre: (state, action: PayloadAction<number>) => {
      state.selectedGenreId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGenres.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchGenres.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.genres = action.payload;
      })
      .addCase(fetchGenres.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message ?? "Unknown Error";
      });
  },
});

export const genresSliceActions = genresSlice.actions;

export default genresSlice;
