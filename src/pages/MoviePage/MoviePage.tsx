import { FC } from 'react';
import { FlexComponent } from '../../styledComponents/FlexComponent/FlexComponent';
import { useAppSelector } from '../../assets/hooks/storeHooks/storeHooks';
import { useParams } from 'react-router-dom';
import { BEATFILM_MOVIES_API } from '../../assets/utils/URLs/beatfilmAPI/beatfilmAPI';
import {
  LabelStyled,
  ListOfMovieInformationStyled,
  MainPictureContainerStyled,
  MovieDescriptionStyled,
  MovieDetails,
  MovieInfoContainer,
  MovieMainPictureStyled,
  MoviePosterStyled,
  MovieTitleStyled,
} from './MoviePageStyled';
import { Wrapper } from '../../styledComponents/Wrapper/Wrapper';
import { MovieType } from '../../types/MovieType';

export const MoviePage: FC = () => {
  const { movies } = useAppSelector((state) => state.movies);
  const { movieId } = useParams();
  const movie: MovieType = movies.find((item) => item.id === Number(movieId))!;
  const { duration, image, nameRU, description, director, year, country } = movie;

  return (
    <Wrapper as="main">
      <MainPictureContainerStyled>
        <MovieMainPictureStyled src={`${BEATFILM_MOVIES_API}${image.url}`} alt="movie poster" />
        <span>{nameRU}</span>
      </MainPictureContainerStyled>
      <MovieInfoContainer as="article" $direction="row" $gap="42px">
        <MoviePosterStyled
          src={`${BEATFILM_MOVIES_API}${image.url}`}
          width={134}
          height={201}
          alt="movie poster"
        />
        <ListOfMovieInformationStyled as="ul" $direction="column" $gap="20px">
          <MovieTitleStyled $size="20px">{nameRU}</MovieTitleStyled>
          <FlexComponent as="li" $direction="column" $gap="8px">
            <LabelStyled>Режиссер</LabelStyled>
            <MovieDetails>{director}</MovieDetails>
          </FlexComponent>
          <FlexComponent as="li" $direction="column" $gap="8px">
            <LabelStyled>Длительность</LabelStyled>
            <MovieDetails>{duration}</MovieDetails>
          </FlexComponent>
          <FlexComponent as="li" $direction="column" $gap="8px">
            <LabelStyled>Год</LabelStyled>
            <MovieDetails>{year}</MovieDetails>
          </FlexComponent>
          <FlexComponent as="li" $direction="column" $gap="8px">
            <LabelStyled>Страна</LabelStyled>
            <MovieDetails>{country}</MovieDetails>
          </FlexComponent>
        </ListOfMovieInformationStyled>
        <MovieDescriptionStyled $size="22px">{description}</MovieDescriptionStyled>
      </MovieInfoContainer>
    </Wrapper>
  );
};
