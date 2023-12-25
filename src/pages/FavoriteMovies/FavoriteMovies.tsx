import { FC, useState } from 'react';
import { Search } from '../../components/Search/Search';
import { MoviesContainer } from '../../components/MoviesContainer/MoviesContainer';
import { MoviesStyled } from '../Movies/MoviesStyled';

export const FavoriteMovies: FC = () => {
  const [showShortMovie, setShowShortMovie] = useState<boolean>(false);
  const [searchingMovie, setSearchingMovie] = useState<string>('');

  return (
    <MoviesStyled as="main">
      <Search
        showShortMovie={showShortMovie}
        searchingMovie={searchingMovie}
        setShowShortMovie={setShowShortMovie}
        setSearchingMovie={setSearchingMovie}
      />
      <MoviesContainer showShortMovie={showShortMovie} searchingMovie={searchingMovie} />
    </MoviesStyled>
  );
};
