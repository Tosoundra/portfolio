import { FC, useState } from 'react';
import { useParams } from 'react-router-dom';
import { moviesAPI } from '../../API/movies/moviesAPI';
import { LikeButton } from '../../components/LikeButton/LikeButton';
import {
  Blur,
  InfoWrapper,
  MenuTabStyled,
  MovieCardDetailsStyled,
  MovieDescription,
  MovieDescriptionShort,
  MovieDetailsContainer,
  MovieInfoContainerStyled,
  MovieInfoWrapper,
  MovieNavigationMenuStyled,
  MovieTitle,
  NavigationMenuButtonStyled,
} from '../../components/MovieCardDetails/MovieCardDetailsStyled';
import { convertNumberToTime } from '../../constants/convertNumberToTime/convertNumberToTime';
import { setDescriptionShort } from '../../constants/doDescriptionShort/setDescriptionShort';
import { useAppSelector } from '../../hooks/storeHooks/storeHooks';
import { MovieType } from '../../types/MovieType';
import { MoviePageWrapper } from './MoviePageStyled';

enum Tabs {
  about = 'О фильме',
  description = 'Описание',
}

export const MoviePage: FC = () => {
  const [currentTab, setCurrentTab] = useState<Tabs>(Tabs.about);
  const { movies } = useAppSelector((state) => state.movies);
  const { movieId } = useParams();
  const movie: MovieType = movies.find((item) => item.id === Number(movieId))!;
  const {
    duration,
    image: { url },
    nameRU,
    description,
    director,
    year,
    country,
    id,
  } = movie;
  const isMovieLiked = useAppSelector((state) => state.favoriteMovies.favoriteMovies.includes(id!));
  const imageLink = `${moviesAPI.BASE_URL}${url}`;
  const filmDuration = convertNumberToTime(duration);
  const shortDescription = setDescriptionShort(description);

  return (
    <MovieCardDetailsStyled $src={imageLink}>
      <Blur $isDescriptionTab={currentTab === Tabs.description}>
        <MoviePageWrapper>
          <MovieInfoWrapper>
            <MovieNavigationMenuStyled>
              <MenuTabStyled>
                <NavigationMenuButtonStyled
                  onClick={() => {
                    setCurrentTab(Tabs.about);
                  }}
                  disabled={currentTab === Tabs.about}
                  type="button">
                  О фильме
                </NavigationMenuButtonStyled>
                <NavigationMenuButtonStyled
                  onClick={() => {
                    setCurrentTab(Tabs.description);
                  }}
                  disabled={currentTab === Tabs.description}
                  type="button">
                  Описание
                </NavigationMenuButtonStyled>
              </MenuTabStyled>
            </MovieNavigationMenuStyled>
            <MovieInfoContainerStyled>
              <MovieTitle $isDescriptionTab={currentTab === Tabs.description}>{nameRU}</MovieTitle>
              <InfoWrapper $isDescriptionTab={currentTab === Tabs.description}>
                <MovieDetailsContainer>
                  <span>Фильм</span>
                  <span>{year}</span>
                  <span>{country}</span>
                  <span>{filmDuration}</span>
                  <span>{director}</span>
                </MovieDetailsContainer>
                <LikeButton isLiked={isMovieLiked} movieId={id!} />
              </InfoWrapper>
              {(currentTab === Tabs.description && (
                <MovieDescription>{shortDescription}</MovieDescription>
              )) || (
                <MovieDescriptionShort $isDescriptionTab={currentTab !== Tabs.description}>
                  {description}
                </MovieDescriptionShort>
              )}
            </MovieInfoContainerStyled>
          </MovieInfoWrapper>
        </MoviePageWrapper>
      </Blur>
    </MovieCardDetailsStyled>
  );
};
