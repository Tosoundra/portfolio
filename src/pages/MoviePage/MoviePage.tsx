import { FC, useState } from 'react';
import { useParams } from 'react-router-dom';
import { LikeButton } from '../../components/LikeButton/LikeButton';
import {
  Blur,
  MenuTabStyled,
  MovieCardDetailsStyled,
  MovieDescription,
  MovieDetailsContainer,
  MovieInfoContainerStyled,
  MovieInfoWrapper,
  MovieNavigationMenuStyled,
  MovieTitle,
  NavigationMenuButtonStyled,
} from '../../components/MovieCardDetails/MovieCardDetailsStyled';
import { moviesAPI } from '../../constants/API/movies/moviesAPI';
import { convertNumberToTime } from '../../constants/convertNumberToTime/convertNumberToTime';
import { useAppSelector } from '../../hooks/storeHooks/storeHooks';
import { Wrapper } from '../../styledComponents/Wrapper/Wrapper';
import { MovieType } from '../../types/MovieType';

const aboutTab = 'О фильме';
const detailsTab = 'Детали';
export const MoviePage: FC = () => {
  const [currentTab, setCurrentTab] = useState(aboutTab);

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

  if (currentTab === detailsTab) {
    return (
      <Wrapper as="main">
        <MovieCardDetailsStyled $src={imageLink}>
          <Blur $isDetailsTab>
            <MovieInfoWrapper>
              <MovieNavigationMenuStyled>
                <MenuTabStyled>
                  <NavigationMenuButtonStyled
                    onClick={() => {
                      setCurrentTab(aboutTab);
                    }}
                    type="button">
                    О фильме
                  </NavigationMenuButtonStyled>
                  <NavigationMenuButtonStyled disabled={currentTab === detailsTab} type="button">
                    Описание
                  </NavigationMenuButtonStyled>
                </MenuTabStyled>
              </MovieNavigationMenuStyled>
              <MovieInfoContainerStyled>
                <MovieDescription>{description}</MovieDescription>
              </MovieInfoContainerStyled>
            </MovieInfoWrapper>
          </Blur>
        </MovieCardDetailsStyled>
      </Wrapper>
    );
  }

  return (
    <Wrapper as="main">
      <MovieCardDetailsStyled $src={imageLink}>
        <Blur $isDetailsTab={false}>
          <MovieInfoWrapper>
            <MovieNavigationMenuStyled>
              <MenuTabStyled>
                <NavigationMenuButtonStyled disabled={currentTab === aboutTab} type="button">
                  О фильме
                </NavigationMenuButtonStyled>
                <NavigationMenuButtonStyled
                  onClick={() => {
                    setCurrentTab(detailsTab);
                  }}
                  disabled={currentTab === detailsTab}
                  type="button">
                  Описание
                </NavigationMenuButtonStyled>
              </MenuTabStyled>
            </MovieNavigationMenuStyled>
            <MovieInfoContainerStyled>
              <MovieTitle>{nameRU}</MovieTitle>
              <MovieDetailsContainer>
                <span>Фильм</span>
                <span>{year}</span>
                <span>{country}</span>
                <span>{filmDuration}</span>
                <span>{director}</span>
              </MovieDetailsContainer>
              <LikeButton movieId={id!} isLiked={isMovieLiked} />
              <MovieDescription $isAboutTab>{description}</MovieDescription>
            </MovieInfoContainerStyled>
          </MovieInfoWrapper>
        </Blur>
      </MovieCardDetailsStyled>
    </Wrapper>
  );
};
