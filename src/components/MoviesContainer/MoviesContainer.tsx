import { FC, useState, memo, useRef, useEffect } from 'react';
import { LoadMoreMoviesButton, MoviesContainerStyled } from './MoviesContainerStyled';
import { MovieCard } from '../MovieCard/MovieCard';
import { renderMovies } from '../../constants/renderMovies/renderMovies';
import { MovieSkeleton } from '../Skeleton/MovieSkeleton/MovieSkeleton';
import { MovieType } from '../../types/MovieType';
import { useAppDispatch, useAppSelector } from '../../assets/hooks/storeHooks/storeHooks';
import { BEATFILM_MOVIES_API } from '../../constants/URLs/beatfilmAPI/beatfilmAPI';
import { showErrorTooltip } from '../../store/reducers/infoTooltip/showTooltip';

interface MovieTypesContainer {
  movies: MovieType[];
  showShortMovie: boolean;
  searchingMovie: string;
}

export const MoviesContainer: FC<MovieTypesContainer> = memo(
  ({ movies, showShortMovie, searchingMovie }) => {
    const dispatch = useAppDispatch();

    const containerWithMoviesRef = useRef<HTMLUListElement>(null);
    const [countOfMovieInContainer, setCountOfMovieInContainer] = useState(16);
    const [countOfMovie, setCountOfMovie] = useState<number>(16);

    const { error, isLoading } = useAppSelector((state) => state.movies);
    const { favoriteMovies } = useAppSelector((state) => state.favoriteMovies);

    useEffect(() => {
      if (typeof containerWithMoviesRef.current?.childElementCount === 'number')
        setCountOfMovieInContainer(containerWithMoviesRef.current?.childElementCount);
    }, [countOfMovie, searchingMovie, showShortMovie, movies]);

    if (isLoading) {
      return (
        <MoviesContainerStyled>
          {Array(4)
            .fill(null)
            .map((_, index) => (
              <MovieSkeleton key={index} />
            ))}
        </MoviesContainerStyled>
      );
    }

    if (error) {
      dispatch(showErrorTooltip(error as string));

      return (
        <>
          <p>Ничего не найдено</p>
        </>
      );
    }

    if (!movies.length) {
      return (
        <>
          <p>Вам ничего не нравится...</p>
        </>
      );
    }

    return (
      <>
        {!countOfMovieInContainer && (
          <p>Ничего не найдено. Возможно вы ввели с ошибкой или такого фильма не существует.</p>
        )}

        <MoviesContainerStyled ref={containerWithMoviesRef}>
          {renderMovies(movies, showShortMovie, searchingMovie, countOfMovie).map(
            (movie, index) => (
              <MovieCard
                movieId={movie.id}
                title={movie.nameRU}
                url={`${BEATFILM_MOVIES_API}${movie.image.url}`}
                duration={movie.duration}
                isMovieLiked={favoriteMovies.includes(movie.id)}
                key={index}
              />
            ),
          )}
        </MoviesContainerStyled>

        {countOfMovieInContainer === countOfMovie && (
          <LoadMoreMoviesButton
            onClick={() => {
              setCountOfMovie((prevState) => prevState + 16);
            }}
            type="button">
            Еще
          </LoadMoreMoviesButton>
        )}
      </>
    );
  },
);
