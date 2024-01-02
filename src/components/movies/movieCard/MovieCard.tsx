import styles from './MovieCard.module.css';

const MovieCard = ({ movie }) => {
  const {
    title,
    poster_path,
    genre_ids,
    overview,
    release_date,
    vote_average,
    vote_count,
  } = movie;

  const getGenreNames = () => {
    // Replace with your logic to map genre_ids to genre names
    const genreNames = ['Science Fiction']; // Sample genre name
    return genreNames.join(', ');
  };

  return (
    <div className={styles.movieItem}>
      <img
        src={`https://image.tmdb.org/t/p/w300${poster_path}`}
        alt={title}
        className={styles.movieImage}
      />
      <h3>{title}</h3>
      <p>
        <strong>Genres:</strong> {getGenreNames()}
      </p>
      <p>
        <strong>Release Date:</strong> {release_date}
      </p>
      <p>
        <strong>Rating:</strong> {vote_average} ({vote_count} votes)
      </p>
      <p>{overview}</p>
    </div>
  );
};

export default MovieCard;
