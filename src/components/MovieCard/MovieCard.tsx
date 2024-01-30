import { FC, memo } from 'react';
import { Image, LikeButtonStyled, MovieCardStyled, MovieTitleStyled } from './MovieCardStyled';
import { FlexComponent } from '../../styledComponents/FlexComponent/FlexComponent';
import { convertNumberToTime } from '../../assets/utils/convertNumberToTime/convertNumberToTime';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../assets/hooks/storeHooks/storeHooks';
import { likeMovieAction } from '../../store/reducers/favoriteMovies/likeMovieAction';
import { dislikeMovieAction } from '../../store/reducers/favoriteMovies/dislikeMovieAction';

interface MovieProps {
  movieId: number;
  title: string;
  url: string;
  duration: number;
  isMovieLiked: boolean;
}

export const MovieCard: FC<MovieProps> = memo(({ movieId, title, url, duration, isMovieLiked }) => {
  const dispatch = useAppDispatch();

  const { hour, minutes } = convertNumberToTime(duration);

  const likeButtonOnClickHandle = () => {
    try {
      if (isMovieLiked) {
        dispatch(dislikeMovieAction(movieId));
      } else {
        dispatch(likeMovieAction(movieId));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MovieCardStyled as="li" $direction="column">
      <Link to={String(movieId)}>
        <Image src={url} alt={title} width={270} height={151} />
      </Link>
      <FlexComponent $direction="row">
        <Link to={String(movieId)}>
          <MovieTitleStyled $size="13px">{title}</MovieTitleStyled>
        </Link>
        <LikeButtonStyled
          $isActive={isMovieLiked}
          onClick={likeButtonOnClickHandle}
          type="button"
        />
      </FlexComponent>
      <span>
        {hour}ч. {minutes}мин.
      </span>
    </MovieCardStyled>
  );
});
