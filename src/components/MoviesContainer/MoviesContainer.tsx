import { FC, Suspense, lazy, memo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import loadMoreMovieArrowIcon from '../../assets/images/right-arrow_load-more-movie-section.svg';
import { ALL_MOVIES_URL } from '../../constants/API/appURL';
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks/storeHooks';
import { showErrorTooltip } from '../../store/reducers/infoTooltip/showTooltip';
import { setMovies } from '../../store/reducers/selectedCategoryOfMovies/selectedCategoryOfMovies.slice';
import { ImageStyled } from '../../styledComponents/ImageStyled/ImageStyled';
import { MovieType } from '../../types/MovieType';
import arrowIcon from '.././../assets/images/right-arrow.svg';
import { ListOfMovies } from '../ListOfMovies/ListOfMovies';
import {
  ArrowIconStyled,
  ButtonContainerStyled,
  CarouselOfMoviesStyled,
  ContainerWithCarouselStyled,
  GoToMoreMoviesButtonStyled,
  ItemOfCarouselStyled,
  LoadMoreMovieTextStyled,
  TitleOfCarouselStyled,
} from '../ListOfMovies/ListOfMoviesStyled';

import { MovieSkeleton } from '../Skeleton/MovieSkeleton/MovieSkeleton';
import { MoviesContainerStyled } from './MoviesContainerStyled';

const MovieCardLazy = lazy(() => import('../MovieCard/MovieCard'));

interface Props {
  movies: MovieType[];
}

interface MoviesCategory {
  title: string;
  movies: MovieType[];
}

type ListsOfMoviesCategories = [MoviesCategory, MoviesCategory, MoviesCategory];

const moviesCategories: ListsOfMoviesCategories = [
  { title: 'Отечественное кино', movies: [] },
  { title: 'Зарубежное кино', movies: [] },
  { title: 'Короткометражное кино', movies: [] },
];
const maxNumberOfMoviesInContainer = 6;
export const MoviesContainer: FC<Props> = memo(({ movies }) => {
  const dispatch = useAppDispatch();

  const [filteredListsOfMovies, setFilteredListsOfMovies] = useState(moviesCategories);

  const { error, isLoading } = useAppSelector((state) => state.movies);

  const [currentMovieDetailsContainerId, setCurrentMovieDetailsContainerId] = useState(0);

  useEffect(() => {
    const allRussianMovies = movies.filter((movie) => movie.country === 'Россия');
    const allForeignMovies = movies.filter((movie) => movie.country !== 'Россия');
    const allShortMovies = movies.filter((movie) => movie.duration < 40);

    const filteredMoviesByCategories: ListsOfMoviesCategories = [
      { title: 'Отечественное кино', movies: [...moviesCategories[0].movies, ...allRussianMovies] },
      { title: 'Зарубежное кино', movies: [...moviesCategories[1].movies, ...allForeignMovies] },
      {
        title: 'Короткометражное кино',
        movies: [...moviesCategories[2].movies, ...allShortMovies],
      },
    ];

    setFilteredListsOfMovies(filteredMoviesByCategories);
  }, [movies]);

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

  return (
    <>
      {filteredListsOfMovies.map((categoryOfMovies, indexOfCategory) => {
        if (categoryOfMovies.movies.length) {
          return (
            <ContainerWithCarouselStyled
              key={indexOfCategory}
              id={`listOfMovies${indexOfCategory}`}>
              <Link
                to={ALL_MOVIES_URL}
                onClick={() => {
                  dispatch(setMovies(categoryOfMovies.movies));
                }}
                preventScrollReset>
                <TitleOfCarouselStyled>{categoryOfMovies.title}</TitleOfCarouselStyled>
                <ArrowIconStyled src={arrowIcon} width={15} height={15} alt="button icon" />
              </Link>
              <CarouselOfMoviesStyled as="ul">
                <ListOfMovies
                  currentMovieDetailsContainerId={currentMovieDetailsContainerId}
                  setCurrentMovieDetailsContainerId={setCurrentMovieDetailsContainerId}
                  containerId={indexOfCategory}
                  movies={categoryOfMovies.movies.slice(0, maxNumberOfMoviesInContainer)}
                  renderItem={(movie, setIsOpen) => (
                    <Suspense key={movie.id} fallback={<div>loading</div>}>
                      <ItemOfCarouselStyled>
                        <MovieCardLazy
                          movie={movie}
                          containerId={indexOfCategory}
                          currentMovieDetailsContainerId={indexOfCategory}
                          setCurrentMovieDetailsContainerId={setCurrentMovieDetailsContainerId}
                          setIsOpen={setIsOpen}
                        />
                      </ItemOfCarouselStyled>
                    </Suspense>
                  )}
                />

                {categoryOfMovies.movies.length > maxNumberOfMoviesInContainer && (
                  <ItemOfCarouselStyled>
                    <Link to={ALL_MOVIES_URL} preventScrollReset>
                      <ButtonContainerStyled
                        onClick={() => {
                          dispatch(setMovies(categoryOfMovies.movies));
                          console.log(123);
                        }}>
                        <GoToMoreMoviesButtonStyled type="button">
                          <ImageStyled
                            src={loadMoreMovieArrowIcon}
                            width={24}
                            height={24}
                            alt="icon"
                          />
                        </GoToMoreMoviesButtonStyled>
                        <LoadMoreMovieTextStyled>Показать все</LoadMoreMovieTextStyled>
                      </ButtonContainerStyled>
                    </Link>
                  </ItemOfCarouselStyled>
                )}
              </CarouselOfMoviesStyled>
            </ContainerWithCarouselStyled>
          );
        }
      })}
    </>
  );
});
