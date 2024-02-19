import React, { FC, SetStateAction, memo, useEffect, useLayoutEffect, useState } from 'react';
import closeButton from '../../assets/images/menu_close-button_white.svg';

import { moviesAPI } from '../../constants/API/movies/moviesAPI';
import { convertNumberToTime } from '../../constants/convertNumberToTime/convertNumberToTime';
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks/storeHooks';
import { resetSelectedMovie } from '../../store/reducers/selectedMovie/selectedMovie.slice';
import { ImageStyled } from '../../styledComponents/ImageStyled/ImageStyled';
import { LikeButton } from '../LikeButton/LikeButton';
import {
  Blur,
  ButtonCloseContainer,
  MenuTabStyled,
  MovieCardDetailsStyled,
  MovieDescription,
  MovieDetailsContainer,
  MovieInfoContainerStyled,
  MovieInfoWrapper,
  MovieNavigationMenuStyled,
  MovieTitle,
  NavigationMenuButtonStyled,
} from './MovieCardDetailsStyled';

interface Props {
  currentMovieDetailsContainerId: number;
  thisContainerId: number;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
  containerId: number;
}

const aboutTab = 'О фильме';
const detailsTab = 'Детали';
export const MovieCardDetails: FC<Props> = memo(
  ({ currentMovieDetailsContainerId, thisContainerId, setIsOpen, containerId }) => {
    const [currentTab, setCurrentTab] = useState(aboutTab);

    const movie = useAppSelector((state) => state.selectedMovie);

    const dispatch = useAppDispatch();
    const {
      country,
      description,
      director,
      duration,
      year,
      nameRU,
      image: { url },
      id,
    } = movie;

    const isMovieLiked = useAppSelector((state) =>
      state.favoriteMovies.favoriteMovies.includes(id!),
    );

    const filmDuration = convertNumberToTime(duration);

    const imageLink = `${moviesAPI.BASE_URL}${url}`;

    useLayoutEffect(() => {
      if (currentMovieDetailsContainerId !== thisContainerId) setIsOpen(false);
    }, [thisContainerId, currentMovieDetailsContainerId, setIsOpen]);

    useEffect(() => {
      setCurrentTab(aboutTab);
    }, [movie]);

    if (currentTab === detailsTab) {
      return (
        <MovieCardDetailsStyled $src={imageLink} id={`movieAboutSection${containerId}`}>
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
                <ButtonCloseContainer
                  onClick={() => {
                    setIsOpen(false);
                    dispatch(resetSelectedMovie());
                  }}
                  type="button"
                  title="закрыть окно просмотра">
                  <ImageStyled src={closeButton} width={30} height={30} />
                </ButtonCloseContainer>
              </MovieNavigationMenuStyled>
              <MovieInfoContainerStyled>
                <MovieDescription>{description}</MovieDescription>
              </MovieInfoContainerStyled>
            </MovieInfoWrapper>
          </Blur>
        </MovieCardDetailsStyled>
      );
    }

    return (
      <MovieCardDetailsStyled $src={imageLink} id={`movieAboutSection${containerId}`}>
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
              <ButtonCloseContainer
                onClick={() => {
                  setIsOpen(false);
                  dispatch(resetSelectedMovie());
                }}
                type="button"
                title="закрыть окно просмотра">
                <ImageStyled src={closeButton} width={30} height={30} />
              </ButtonCloseContainer>
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
    );
  },
);
