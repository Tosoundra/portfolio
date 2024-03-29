import React, { FC, ReactNode, SetStateAction, memo, useState } from 'react';
import { createPortal } from 'react-dom';
import { MovieType } from '../../types/MovieType';
import { MovieCardDetails } from '../MovieCardDetails/MovieCardDetails';

interface Props {
  movies: MovieType[];
  renderItem: (movie: MovieType, setter: React.Dispatch<SetStateAction<boolean>>) => ReactNode;
  currentMovieDetailsContainerId: number;
  containerId: number;
  setCurrentMovieDetailsContainerId: React.Dispatch<SetStateAction<number>>;
}

export const ListOfMovies: FC<Props> = memo(
  ({ movies, renderItem, currentMovieDetailsContainerId, containerId }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        {movies.map((movie) => renderItem(movie, setIsOpen))}

        {isOpen &&
          currentMovieDetailsContainerId === containerId &&
          createPortal(
            <MovieCardDetails setIsOpen={setIsOpen} containerId={containerId} />,
            document.getElementById(`listOfMovies${containerId}`)!,
          )}
      </>
    );
  },
);
