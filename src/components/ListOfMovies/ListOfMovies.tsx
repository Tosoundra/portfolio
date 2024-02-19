import React, { FC, ReactNode, SetStateAction, memo, useState } from 'react';
import { createPortal } from 'react-dom';
import { MovieType } from '../../types/MovieType';
import { MovieCardDetails } from '../MovieCardDetails/MovieCardDetails';

interface Props {
  movies: MovieType[];
  renderItem: (
    movie: MovieType,
    index: number,
    setter: React.Dispatch<SetStateAction<boolean>>,
  ) => ReactNode;
  currentMovieDetailsContainerId: number;
  containerId: number;
  setCurrentMovieDetailsContainerId: React.Dispatch<SetStateAction<number>>;
}

export const ListOfMovies: FC<Props> = memo(
  ({ movies, renderItem, currentMovieDetailsContainerId, containerId }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        {movies.map((movie, index) => renderItem(movie, index, setIsOpen))}

        {isOpen &&
          createPortal(
            <MovieCardDetails
              currentMovieDetailsContainerId={currentMovieDetailsContainerId}
              setIsOpen={setIsOpen}
              thisContainerId={containerId}
              containerId={containerId}
            />,
            document.getElementById(`listOfMovies${containerId}`)!,
          )}
      </>
    );
  },
);
