import React, { FC, SetStateAction, memo } from 'react';
import { useLocation } from 'react-router-dom';
import { ALL_MOVIES_URL } from '../../constants/API/appURL';
import { moviesAPI } from '../../constants/API/movies/moviesAPI';
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks/storeHooks';
import { setSelectedMovie } from '../../store/reducers/selectedMovie/selectedMovie.slice';
import { MovieType } from '../../types/MovieType';
import { Image, MovieCardStyled } from './MovieCardStyled';

interface MovieProps {
  movie: MovieType;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
  currentMovieDetailsContainerId: number;
  setCurrentMovieDetailsContainerId: React.Dispatch<SetStateAction<number>>;
  containerId: number;
}

const MovieCard: FC<MovieProps> = memo(
  ({
    setIsOpen,
    movie,
    currentMovieDetailsContainerId,
    setCurrentMovieDetailsContainerId,
    containerId,
  }) => {
    const dispatch = useAppDispatch();
    const {
      nameRU,
      image: { url },
      id,
    } = movie;
    const imageLink = `${moviesAPI.BASE_URL}${url}`;
    const selectedMovieId = useAppSelector((state) => state.selectedMovie.id);
    const { pathname } = useLocation();

    const cardOnClickHandler = () => {
      setIsOpen(true);
      setCurrentMovieDetailsContainerId(currentMovieDetailsContainerId);
      dispatch(setSelectedMovie(movie));
    };

    return (
      <>
        <MovieCardStyled $isSelected={id === selectedMovieId} onClick={cardOnClickHandler}>
          <a href={`#movieAboutSection${containerId}`}>
            <Image
              $isAllMoviesPage={pathname.includes(ALL_MOVIES_URL)}
              src={imageLink}
              alt={nameRU}
              width={270}
              height={151}
              loading="lazy"
            />
          </a>
        </MovieCardStyled>
      </>
    );
  },
);

export default MovieCard;
