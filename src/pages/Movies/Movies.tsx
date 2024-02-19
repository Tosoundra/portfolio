import { FC, useEffect } from 'react';
import { MoviesContainer } from '../../components/MoviesContainer/MoviesContainer';
import { MoviesStyled } from './MoviesStyled';
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks/storeHooks';
import { getMoviesThunkAction } from '../../store/reducers/movies/moviesAction';
import { getFavoriteMoviesAction } from '../../store/reducers/favoriteMovies/getFavoriteMoviesAction';

export const Movies: FC = () => {
  const { movies } = useAppSelector((state) => state.movies);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMoviesThunkAction());
    dispatch(getFavoriteMoviesAction());
  }, []);

  return (
    <>
      <MoviesStyled as="main">
        <MoviesContainer movies={movies} />
      </MoviesStyled>
    </>
  );
};
