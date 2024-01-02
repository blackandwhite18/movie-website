export interface Movie {
  id: number;
  title: string;
  // Add other movie properties
}

export interface MovieState {
  movies: Movie[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null;
  selectedYear: number;
  selectedGenres: number[];
}
