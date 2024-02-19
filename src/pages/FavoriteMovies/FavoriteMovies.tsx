import { FC, useEffect } from 'react';
import { MoviesContainer } from '../../components/MoviesContainer/MoviesContainer';
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks/storeHooks';
import { getFavoriteMoviesAction } from '../../store/reducers/favoriteMovies/getFavoriteMoviesAction';
import { getMoviesThunkAction } from '../../store/reducers/movies/moviesAction';
import { MovieType } from '../../types/MovieType';
import { MoviesStyled } from '../Movies/MoviesStyled';

const filterFavoriteMovies = (listOfMovies: MovieType[], favoriteMoviesId: number[]) => {
  return listOfMovies.filter((movie) => favoriteMoviesId.includes(movie.id!));
};

export const FavoriteMovies: FC = () => {
  const { movies } = useAppSelector((state) => state.movies);
  const favoriteMoviesId = useAppSelector((state) => state.favoriteMovies.favoriteMovies);
  const dispatch = useAppDispatch();

  const favoriteMovies = filterFavoriteMovies(movies, favoriteMoviesId);

  useEffect(() => {
    if (!movies.length) dispatch(getMoviesThunkAction());
    dispatch(getFavoriteMoviesAction());
  }, [dispatch, movies]);

  return (
    <MoviesStyled as="main">
      <MoviesContainer movies={favoriteMovies} />
    </MoviesStyled>
  );
};
