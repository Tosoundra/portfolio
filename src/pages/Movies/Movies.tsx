import { FC, useEffect, useState } from 'react';
import { Search } from '../../components/Search/Search';
import { MoviesContainer } from '../../components/MoviesContainer/MoviesContainer';
import { MoviesStyled } from './MoviesStyled';
import { useAppDispatch, useAppSelector } from '../../assets/hooks/storeHooks/storeHooks';
import { getMoviesThunkAction } from '../../store/reducers/movies/moviesAction';
import { getFavoriteMoviesAction } from '../../store/reducers/favoriteMovies/getFavoriteMoviesAction';
import { Outlet, useLocation, useParams } from 'react-router-dom';

export const Movies: FC = () => {
  const { movies } = useAppSelector((state) => state.movies);
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const { movieId } = useParams();

  const [showShortMovie, setShowShortMovie] = useState<boolean>(false);
  const [searchingMovie, setSearchingMovie] = useState<string>('');

  useEffect(() => {
    if (movies.length === 0) dispatch(getMoviesThunkAction());
    dispatch(getFavoriteMoviesAction());
  }, []);

  if (pathname.endsWith(movieId!)) {
    return (
      <>
        <Outlet />
      </>
    );
  }

  return (
    <>
      <MoviesStyled as="main">
        <Search
          showShortMovie={showShortMovie}
          searchingMovie={searchingMovie}
          setShowShortMovie={setShowShortMovie}
          setSearchingMovie={setSearchingMovie}
        />
        <MoviesContainer
          movies={movies}
          showShortMovie={showShortMovie}
          searchingMovie={searchingMovie}
        />
      </MoviesStyled>
    </>
  );
};
