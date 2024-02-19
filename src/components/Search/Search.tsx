import { Dispatch, FC, SetStateAction, memo } from 'react';
import { inputOnChangeHandle } from '../../constants/inputOnChangeHandle/inputOnChangeHandle';
import { Input, SearchStyled } from './SearchStyled';

interface Props {
  searchingMovie: string;

  setSearchingMovie: Dispatch<SetStateAction<string>>;
}

export const Search: FC<Props> = memo(({ searchingMovie, setSearchingMovie }) => {
  return (
    <SearchStyled>
      <Input
        value={searchingMovie}
        onChange={inputOnChangeHandle(setSearchingMovie)}
        type="search"
        placeholder="Введите название фильма"
      />
    </SearchStyled>
  );
});
