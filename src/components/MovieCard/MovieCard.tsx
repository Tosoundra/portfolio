import { FC, memo } from 'react';
import { Image, LikeButtonStyled, MovieCardStyled } from './MovieCardStyled';
import { FlexComponent } from '../../styledComponents/FlexComponent/FlexComponent';
import { convertToTime } from '../../assets/utils/convertToTime/convertToTime';
import { MediumFont } from '../../styledComponents/FontComponents/FontComponents';

interface MovieProps {
  title: string;
  url: string;
  duration: number;
}

export const MovieCard: FC<MovieProps> = memo(({ title, url, duration }) => {
  const { hour, minutes } = convertToTime(duration);
  return (
    <MovieCardStyled as="li" direction="column">
      <Image src={url} width={270} height={151} alt={title} />
      <FlexComponent direction="row">
        <MediumFont size="13px">{title}</MediumFont>
        <LikeButtonStyled type="button"></LikeButtonStyled>
      </FlexComponent>
      <span>
        {hour}ч. {minutes}мин.
      </span>
    </MovieCardStyled>
  );
});
