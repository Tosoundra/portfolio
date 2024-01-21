import { Dispatch, FC, SetStateAction, memo } from 'react';
import { Checkbox, Input, SearchStyled } from './SearchStyled';
import { inputOnChangeHandle } from '../../assets/utils/inputOnChangeHandle/inputOnChangeHandle';

interface Props {
  showShortMovie: boolean;
  searchingMovie: string;
  setShowShortMovie: Dispatch<SetStateAction<boolean>>;
  setSearchingMovie: Dispatch<SetStateAction<string>>;
}

export const Search: FC<Props> = memo(
  ({ showShortMovie, searchingMovie, setShowShortMovie, setSearchingMovie }) => {
    return (
      <SearchStyled $direction="column" $gap="32px">
        <Input
          value={searchingMovie}
          onChange={inputOnChangeHandle(setSearchingMovie)}
          type="text"
          placeholder="Введите название фильма"
        />
        <label htmlFor="shortMovies">
          <Checkbox
            checked={showShortMovie}
            onChange={() => {
              setShowShortMovie((prevState) => !prevState);
            }}
            type="checkbox"
            name="shortMovies"
            id="shortMovies"
          />
          Короткометражки
        </label>
      </SearchStyled>
    );
  },
);
