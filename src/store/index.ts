import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "../components/movies/movieSlice";
import genresSlice from "../components/genres/genreSlice";

const store = configureStore({
  reducer: {
    movies: movieSlice.reducer,
    genres: genresSlice.reducer
  }
})

export default store