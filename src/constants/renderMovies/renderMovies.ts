import { MovieType } from '../../types/MovieType';

type RenderMoviesType = (
  movies: MovieType[],
  showShortMovie: boolean,
  searchingMovie: string,
  countOfMovie: number,
) => MovieType[];

export const renderMovies: RenderMoviesType = (
  movies,
  showShortMovie,
  searchingMovie,
  countOfMovie,
) => {
  const forRender = showShortMovie ? movies.filter((movie) => movie.duration < 40) : movies;

  return forRender
    .slice(0, countOfMovie)
    .filter((movie) =>
      movie.nameRU.trim().toLocaleLowerCase().includes(searchingMovie.toLocaleLowerCase()),
    );
};
