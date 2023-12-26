import { FC, useState, useEffect, memo } from 'react';
import { LoadMoreMoviesButton, MoviesContainerStyled } from './MoviesContainerStyled';
import { MovieCard } from '../MovieCard/MovieCard';
import { API_URL, MOVIES_URL } from "../../assets/utils/URL's/moviesAPI";
import { request } from '../../assets/utils/request/request';
import { renderMovies } from '../../assets/utils/renderMovies/renderMovies';
import { createPortal } from 'react-dom';
import { InfoTooltip } from '../InfoTooltip/InfoTooltip';
import { notFound } from '../../assets/utils/errorMessage/errorMessage';
import { IMovie } from '../../types/IMovie';
import { Skeleton } from '../Skeleton/Skeleton';
import { useLocation } from 'react-router-dom';

interface IMoviesContainer {
  showShortMovie: boolean;
  searchingMovie: string;
}

export const MoviesContainer: FC<IMoviesContainer> = memo(({ showShortMovie, searchingMovie }) => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  const [countMovie, setCountMovie] = useState<number>(16);
  const [isError, setIsError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<string>('');
  const [isSkeletonActive, setIsSkeletonActive] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        setIsSkeletonActive(true);
        const movies = await request<IMovie[]>(MOVIES_URL, 'GET');

        setMovies(movies);
        setIsSkeletonActive(false);
      } catch (error) {
        // Promise.resolve(
        //   setTimeout(() => {
        //     setIsError(false);
        //   }, 3000),
        // );
        setMessageError(notFound);
        setIsError(true);
      }
    })();
  }, []);

  return (
    <>
      <MoviesContainerStyled>
        {isSkeletonActive && Array(4).fill(<Skeleton />)}

        {renderMovies(movies, showShortMovie, searchingMovie, countMovie).map((movie, index) => (
          <MovieCard
            title={movie.nameRU}
            url={`${API_URL}${movie.image.url}`}
            duration={movie.duration}
            key={index}
          />
        ))}

        {isError &&
          createPortal(<InfoTooltip status="status" message={messageError} />, document.body)}
      </MoviesContainerStyled>

      {countMovie < movies.length && (
        <LoadMoreMoviesButton
          onClick={() => {
            setCountMovie((prevState) => prevState + 16);
          }}
          type="button">
          Еще
        </LoadMoreMoviesButton>
      )}
    </>
  );
});
