import { FC, Suspense, lazy, memo, useState } from 'react';
import { ListOfMovies } from '../../components/ListOfMovies/ListOfMovies';
import {
  CarouselOfMoviesStyled,
  ItemOfCarouselStyled,
} from '../../components/ListOfMovies/ListOfMoviesStyled';
import { MovieSkeleton } from '../../components/Skeleton/MovieSkeleton/MovieSkeleton';
import { useAppSelector } from '../../hooks/storeHooks/storeHooks';
import { Wrapper } from '../../styledComponents/Wrapper/Wrapper';
import { MovieType } from '../../types/MovieType';

const MovieCardLazy = lazy(() => import('../../components/MovieCard/MovieCard'));

export const AllMovies: FC = memo(() => {
  const [currentMovieDetailsContainerId, setCurrentMovieDetailsContainerId] = useState(0);
  const { movies } = useAppSelector((state) => state.selectedCategoryOfMovies);

  const transformedListOfMovies: Array<MovieType[]> = movies.reduce(
    (acc: Array<MovieType[]>, _, index) => {
      if (index % 4 === 0) {
        acc.push(movies.slice(index, index + 4));
      }
      return acc;
    },
    [],
  );

  return (
    <Wrapper as="main">
      {transformedListOfMovies.map((listOfMovies, indexOfList) => {
        return (
          <section id={`listOfMovies${indexOfList}`} key={indexOfList}>
            <CarouselOfMoviesStyled as="ul">
              <ListOfMovies
                currentMovieDetailsContainerId={currentMovieDetailsContainerId}
                setCurrentMovieDetailsContainerId={setCurrentMovieDetailsContainerId}
                containerId={indexOfList}
                movies={listOfMovies}
                renderItem={(movie, setIsOpen) => (
                  <Suspense key={movie.id} fallback={<MovieSkeleton />}>
                    <ItemOfCarouselStyled>
                      <MovieCardLazy
                        movie={movie}
                        containerId={indexOfList}
                        currentMovieDetailsContainerId={indexOfList}
                        setCurrentMovieDetailsContainerId={setCurrentMovieDetailsContainerId}
                        setIsOpen={setIsOpen}
                      />
                    </ItemOfCarouselStyled>
                  </Suspense>
                )}
              />
            </CarouselOfMoviesStyled>
          </section>
        );
      })}
    </Wrapper>
  );
});
