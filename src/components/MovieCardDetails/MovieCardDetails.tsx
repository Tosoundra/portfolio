import React, { FC, SetStateAction, memo, useEffect, useState } from 'react';
import { moviesAPI } from '../../API/movies/moviesAPI';
import closeButton from '../../assets/images/menu_close-button_white.svg';
import { convertNumberToTime } from '../../constants/convertNumberToTime/convertNumberToTime';
import { setDescriptionShort } from '../../constants/doDescriptionShort/setDescriptionShort';
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks/storeHooks';
import { resetSelectedMovie } from '../../store/reducers/selectedMovie/selectedMovie.slice';
import { ImageStyled } from '../../styledComponents/ImageStyled/ImageStyled';
import { LikeButton } from '../LikeButton/LikeButton';
import {
  Blur,
  ButtonCloseContainer,
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
} from './MovieCardDetailsStyled';

interface Props {
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
  containerId: number;
}

enum Tabs {
  about = 'О фильме',
  description = 'Описание',
}

export const MovieCardDetails: FC<Props> = memo(({ setIsOpen, containerId }) => {
  const [currentTab, setCurrentTab] = useState<Tabs>(Tabs.about);
  const movie = useAppSelector((state) => state.selectedMovie);
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
  const isMovieLiked = useAppSelector((state) => state.favoriteMovies.favoriteMovies.includes(id!));
  const filmDuration = convertNumberToTime(duration);
  const imageLink = `${moviesAPI.BASE_URL}${url}`;
  const shortDescription = setDescriptionShort(description);

  const dispatch = useAppDispatch();

  useEffect(() => {
    setCurrentTab(Tabs.about);
  }, [movie]);

  return (
    <MovieCardDetailsStyled $src={imageLink} id={`movieAboutSection${containerId}`}>
      <Blur $isDescriptionTab={currentTab === Tabs.description}>
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
      </Blur>
    </MovieCardDetailsStyled>
  );
});
