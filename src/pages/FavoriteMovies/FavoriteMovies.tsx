import { FC, useEffect, useState } from 'react';
import { Search } from '../../components/Search/Search';
import { MoviesContainer } from '../../components/MoviesContainer/MoviesContainer';
import { MoviesStyled } from '../Movies/MoviesStyled';
import { useAppDispatch, useAppSelector } from '../../assets/hooks/storeHooks/storeHooks';
import { getMoviesThunkAction } from '../../store/reducers/movies/moviesAction';
import { getFavoriteMoviesAction } from '../../store/reducers/favoriteMovies/getFavoriteMoviesAction';
import { filterFavoriteMovies } from '../../assets/utils/filterFavoriteMovies/filterFavoriteMovies';

export const FavoriteMovies: FC = () => {
  const { movies } = useAppSelector((state) => state.movies);
  const favoriteMoviesId = useAppSelector((state) => state.favoriteMovies.favoriteMovies);
  const dispatch = useAppDispatch();

  const [showShortMovie, setShowShortMovie] = useState<boolean>(false);
  const [searchingMovie, setSearchingMovie] = useState<string>('');

  const favoriteMovies = filterFavoriteMovies(movies, favoriteMoviesId);

  useEffect(() => {
    if (movies.length === 0) dispatch(getMoviesThunkAction());
    dispatch(getFavoriteMoviesAction());
  }, [dispatch, movies]);

  return (
    <MoviesStyled as="main">
      <Search
        showShortMovie={showShortMovie}
        searchingMovie={searchingMovie}
        setShowShortMovie={setShowShortMovie}
        setSearchingMovie={setSearchingMovie}
      />
      <MoviesContainer
        movies={favoriteMovies}
        showShortMovie={showShortMovie}
        searchingMovie={searchingMovie}
      />
    </MoviesStyled>
  );
};
