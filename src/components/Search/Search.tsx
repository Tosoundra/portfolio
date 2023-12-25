import { Dispatch, FC, SetStateAction } from 'react';
import { Checkbox, Input } from './SearchStyled';
import { FlexComponent } from '../../styledComponents/FlexComponent/FlexComponent';

interface Props {
  showShortMovie: boolean;
  searchingMovie: string;
  setShowShortMovie: Dispatch<SetStateAction<boolean>>;
  setSearchingMovie: Dispatch<SetStateAction<string>>;
}

export const Search: FC<Props> = ({
  showShortMovie,
  searchingMovie,
  setShowShortMovie,
  setSearchingMovie,
}) => {
  return (
    <FlexComponent direction="column" gap="32px">
      <Input
        value={searchingMovie}
        onChange={(e) => {
          setSearchingMovie(e.target.value);
        }}
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
    </FlexComponent>
  );
};
