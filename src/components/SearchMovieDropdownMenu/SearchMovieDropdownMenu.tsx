import React, { FC, KeyboardEvent, SetStateAction, memo, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { moviesAPI } from '../../constants/API/movies/moviesAPI';
import { inputOnChangeHandle } from '../../constants/inputOnChangeHandle/inputOnChangeHandle';
import { useCloseModal } from '../../hooks/useCloseModals/useCloseModals';
import { FlexComponent } from '../../styledComponents/FlexComponent/FlexComponent';
import { MovieType } from '../../types/MovieType';
import {
  DropdownMenuWithFoundMovieStyled,
  ElementOfDropdownMenuStyled,
  MovieInformationContainerDescription,
  MovieInformationContainerStyled,
  MovieInformationContainerTitle,
  MoviePosterStyled,
  MovieWrapper,
  SearchInputElement,
  SearchMovieDropdownMenuStyled,
  YearContainerStyled,
} from './SearchMovieDropdownMenuStyled';

interface Props {
  movies: MovieType[];
  isSearchInputActive: boolean;
  setIsSearchInputActive: React.Dispatch<SetStateAction<boolean>>;
}

export const SearchMovieDropdownMenu: FC<Props> = memo(
  ({ movies, isSearchInputActive, setIsSearchInputActive }) => {
    const listElementRef = useRef<HTMLAnchorElement>(null);

    const [selectedItemIndex, setSelectedItemIndex] = useState(0);

    const [searchingMovieValue, setSearchingMovieValue] = useState('');
    const [foundMovies, setFoundMovies] = useState<MovieType[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleKeyDown = (e: KeyboardEvent<HTMLUListElement>) => {
      e.preventDefault();
      if (e.key === 'ArrowDown') {
        setSelectedItemIndex((prevIndex) =>
          prevIndex === null || prevIndex === foundMovies.length - 1 ? 0 : prevIndex + 1,
        );
      } else if (e.key === 'ArrowUp') {
        setSelectedItemIndex((prevIndex) =>
          prevIndex === null || prevIndex === 0 ? foundMovies.length - 1 : prevIndex - 1,
        );
      }
    };

    useCloseModal(isSearchInputActive, setIsSearchInputActive, containerRef);

    useEffect(() => {
      if (searchingMovieValue) {
        const foundMovies = movies
          .filter((movie) =>
            movie.nameRU.toLowerCase().includes(searchingMovieValue.trim().toLowerCase()),
          )
          .slice(0, 10);

        setFoundMovies(foundMovies);
      } else {
        setFoundMovies([]);
      }
    }, [searchingMovieValue]);

    useEffect(() => {
      listElementRef.current?.focus();
    }, [selectedItemIndex]);

    return (
      <SearchMovieDropdownMenuStyled ref={containerRef}>
        <SearchInputElement
          type="search"
          value={searchingMovieValue}
          onChange={inputOnChangeHandle(setSearchingMovieValue)}
          placeholder="Введите название фильма"
        />
        <DropdownMenuWithFoundMovieStyled as="ul" onKeyDown={handleKeyDown}>
          {(foundMovies.length &&
            foundMovies.map((movie, index) => (
              <li key={index}>
                <Link
                  to={`movie/${String(movie.id)}`}
                  onClick={() => {
                    setIsSearchInputActive(false);
                  }}
                  ref={selectedItemIndex === index ? listElementRef : null}>
                  <ElementOfDropdownMenuStyled $isOnFocus={selectedItemIndex === index}>
                    <FlexComponent>
                      <MovieWrapper>
                        <MoviePosterStyled
                          src={`${moviesAPI.BASE_URL}${movie.image.url}`}
                          alt="постер фильма"
                          width={48}
                          height={32}
                        />
                        <MovieInformationContainerStyled>
                          <MovieInformationContainerTitle>
                            {movie.nameRU}
                          </MovieInformationContainerTitle>
                          <MovieInformationContainerDescription>
                            {movie.country}
                          </MovieInformationContainerDescription>
                        </MovieInformationContainerStyled>
                      </MovieWrapper>
                      <YearContainerStyled>
                        <span>Фильм</span>
                        <span>{movie.year}</span>
                      </YearContainerStyled>
                    </FlexComponent>
                  </ElementOfDropdownMenuStyled>
                </Link>
              </li>
            ))) ||
            null}
        </DropdownMenuWithFoundMovieStyled>
      </SearchMovieDropdownMenuStyled>
    );
  },
);
