import { IMovie } from '../../../types/IMovie';

type RenderMoviesType = (
  movies: IMovie[],
  showShortMovie: boolean,
  searchingMovie: string,
  countMovie: number,
) => IMovie[];

export const renderMovies: RenderMoviesType = (
  movies,
  showShortMovie,
  searchingMovie,
  countMovie,
) => {
  try {
    const forRender = showShortMovie ? movies.filter((movie) => movie.duration < 40) : movies;

    return forRender
      .slice(0, countMovie)
      .filter((movie) =>
        movie.nameRU.trim().toLocaleLowerCase().includes(searchingMovie.toLocaleLowerCase()),
      );
  } catch (error) {
    throw error;
  }
};
