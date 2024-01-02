// Header.tsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./index.module.css";
import GenreList from "../genres";
import { fetchGenres } from "../genres/genreSlice";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const genres = useSelector((store) => store.genres.genres);

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  return (
    <div className={styles.header}>
      <div className={styles.appName}>MOVIEFIX</div>
      {genres.length > 0 && <GenreList genres={genres} />}
    </div>
  );
};

export default Header;
