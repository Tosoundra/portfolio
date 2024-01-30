import { MovieType } from '../../types/MovieType';

export const filterFavoriteMovies = (
  listOfMovies: Array<MovieType>,
  favoriteMoviesId: number[],
) => {
  return listOfMovies.filter((movie) => favoriteMoviesId.includes(movie.id));
};
