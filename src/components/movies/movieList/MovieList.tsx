import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import { fetchMoviesByGenreAndYear, movieSliceActions } from '../movieSlice';
import styles from './MovieList.module.css';
import MovieCard from '../movieCard/MovieCard';

const MovieList = () => {
  const dispatch = useDispatch();

  const { selectedGenreId } = useSelector((store) => store.genres);
  const {moviesByYear, currentYear} = useSelector((store) => store.movies);
  const visibleYears = Object.keys(moviesByYear)
    .map(Number)
    .sort((a, b) => b - a);

  useEffect(() => {
    if (currentYear === new Date().getFullYear()){
      for (let year = currentYear; year >= currentYear - 4; year--) {
        if (!moviesByYear[year]) {
          dispatch(movieSliceActions.setCurrentYear(year));
          dispatch(fetchMoviesByGenreAndYear({genreId: selectedGenreId, year}));
        }
      }
    }
  }, [dispatch, currentYear]);

  const loadMoreMovies = () => {
    const nextYear = currentYear - 1

    if (!moviesByYear[nextYear]) {
      dispatch(movieSliceActions.setCurrentYear(nextYear));
      dispatch(fetchMoviesByGenreAndYear({genreId: selectedGenreId, year: nextYear}));
    }
  };

  const renderMoviesByYear = (year: number) => {
    return (
      <div key={year} className={styles.movieYear}>
        <h2 className={styles.year}>{year}</h2>
        <div className={styles.movieItems}>
          {moviesByYear[year]?.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className={styles.movieList}>
      <InfiniteScroll
        dataLength={visibleYears.length}
        next={loadMoreMovies}
        hasMore={currentYear > 0}
        loader={<h4 style={{color: "white"}}>Loading...</h4>}
        scrollThreshold={0.7}
        style={{ padding: '16px' }}
      >
        {visibleYears.map((year) => renderMoviesByYear(year))}
      </InfiniteScroll>
    </div>
  );
};

export default MovieList;