import { FC } from 'react';
import { LikeButtonStyled } from './LikeButtonStyled';
import { dislikeMovieAction } from '../../store/reducers/favoriteMovies/dislikeMovieAction';
import { likeMovieAction } from '../../store/reducers/favoriteMovies/likeMovieAction';
import { useAppDispatch } from '../../hooks/storeHooks/storeHooks';

interface Props {
  movieId: number;
  isLiked: boolean;
}

export const LikeButton: FC<Props> = ({ movieId, isLiked }) => {
  const dispatch = useAppDispatch();

  const likeButtonOnClickHandle = () => {
    if (isLiked) {
      dispatch(dislikeMovieAction(movieId));
    } else {
      dispatch(likeMovieAction(movieId));
    }
  };

  return (
    <LikeButtonStyled type="button" onClick={likeButtonOnClickHandle}>
      <svg
        width="50"
        height="50"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="12" fill="#1a1a1a" />
        <path
          d="M14.2727 8C13.2727 8 12.5455 8.52308 12 9.08974C11.4545 8.56667 10.7273 8 9.72727 8C8.13636 8 7 9.2641 7 10.8333C7 11.6179 7.31818 12.3154 7.90909 12.7949L12 16.5L16.0909 12.7949C16.6364 12.2718 17 11.6179 17 10.8333C17 9.2641 15.8636 8 14.2727 8Z"
          fill={isLiked ? 'red' : '#fff'}
        />
      </svg>
    </LikeButtonStyled>
  );
};
