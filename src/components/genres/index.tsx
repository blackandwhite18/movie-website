import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./index.module.css";
import { GenreListProps } from "./types";
import { genresSliceActions } from "./genreSlice";
import { clearMovies, fetchMoviesByGenreAndYear, movieSliceActions } from "../movies/movieSlice";

const GenreList: React.FC<GenreListProps> = ({ genres }) => {
  const dispatch = useDispatch();
  const { selectedGenreId } = useSelector((store) => store.genres);

  const handleGenreClick = (genreId: Number) => {
    dispatch(clearMovies())
    dispatch(movieSliceActions.setCurrentYear(new Date().getFullYear()))
    dispatch(genresSliceActions.selectGenre(genreId));

    if (genreId === 0) {
      dispatch(fetchMoviesByGenreAndYear({ genreId: 0, year: new Date().getFullYear() }));
    } else {
      dispatch(fetchMoviesByGenreAndYear({ genreId, year: new Date().getFullYear()}));
    }
  };

  return (
    <div className={styles.genreContainer}>
      <div
        key="All"
        className={`${styles.genreItem} ${
          selectedGenreId === 0 ? styles.selectedGenre : ""
        }`}
        onClick={() => handleGenreClick(0)}
      >
        All
      </div>
      {genres.map((genre) => (
        <div
          key={genre.id}
          className={`${styles.genreItem} ${
            selectedGenreId === genre.id ? styles.selectedGenre : ""
          }`}
          onClick={() => handleGenreClick(genre.id)}
        >
          {genre.name}
        </div>
      ))}
    </div>
  );
};

export default GenreList;
