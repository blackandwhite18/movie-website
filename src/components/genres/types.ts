export interface Genre {
  id: number;
  name: string;
}

export interface GenresState {
  genres: Genre[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null;
  selectedGenreId: Number;
}

export interface GenreListProps {
  genres: Genre[]; 
}
