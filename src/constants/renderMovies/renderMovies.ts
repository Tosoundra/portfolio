import { MovieType } from '../../types/MovieType';

type RenderMoviesType = (movies: MovieType[], countOfMovie: number) => MovieType[];

export const renderMovies: RenderMoviesType = (movies, countOfMovie) => {
  return movies.slice(0, countOfMovie);
};
