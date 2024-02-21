import React, { FC, SetStateAction, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SearchIcon from '../../assets/images/searchIcon.svg';
import { HeaderMobileMenu } from '../../components/HeaderMobileMenu/HeaderMobileMenu';
import { HeaderSideMenu } from '../../components/HeaderSideMenu/HeaderSideMenu';
import { Logo } from '../../components/Logo/Logo';
import { SearchMovieDropdownMenu } from '../../components/SearchMovieDropdownMenu/SearchMovieDropdownMenu';
import { LANDING_URL, SIGN_IN_URL } from '../../constants/API/appURL';
import { ImageStyled } from '../../styledComponents/ImageStyled/ImageStyled';
import { MovieType } from '../../types/MovieType';
import {
  HeaderButtonStyled,
  HeaderNavigationButtonsContainerStyled,
  HeaderSignUpLinkStyled,
  HeaderStyled,
  NavigationMenu,
  SearchButton,
} from './HeaderStyled';

interface Props {
  movies: MovieType[];
  isSearchInputActive: boolean;
  setIsSearchInputActive: React.Dispatch<SetStateAction<boolean>>;
  isLogged: boolean;
  isHidden: boolean;
}

export const HeaderMobile: FC<Props> = ({
  isLogged,
  isHidden,
  isSearchInputActive,
  movies,
  setIsSearchInputActive,
}) => {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (isActive) document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'initial';
    };
  }, [isActive]);

  if (isSearchInputActive) {
    return (
      <>
        <HeaderStyled $isLandingPath={pathname === LANDING_URL} $isHidden={isHidden}>
          <NavigationMenu as="nav">
            <Logo />
            <SearchMovieDropdownMenu
              movies={movies}
              isSearchInputActive={isSearchInputActive}
              setIsSearchInputActive={setIsSearchInputActive}
            />
            <HeaderMobileMenu setIsActive={setIsActive} />
          </NavigationMenu>
        </HeaderStyled>
        <HeaderSideMenu isActive={isActive} setIsActive={setIsActive} />
      </>
    );
  }

  if (isLogged) {
    return (
      <>
        <HeaderStyled $isLandingPath={pathname === LANDING_URL} $isHidden={isHidden}>
          <NavigationMenu as="nav">
            <Logo />
            <SearchButton
              onClick={(e) => {
                e.stopPropagation();
                setIsSearchInputActive(true);
              }}
              type="button">
              <ImageStyled src={SearchIcon} width={24} height={24} alt="icon" />
            </SearchButton>
            <HeaderMobileMenu setIsActive={setIsActive} />
          </NavigationMenu>
        </HeaderStyled>
        <HeaderSideMenu isActive={isActive} setIsActive={setIsActive} />
      </>
    );
  }

  return (
    <HeaderStyled $isLandingPath={pathname === LANDING_URL} $isHidden={isHidden}>
      <NavigationMenu as="nav">
        <Logo />
        <HeaderNavigationButtonsContainerStyled>
          <HeaderSignUpLinkStyled to="sign-up">Регистрация</HeaderSignUpLinkStyled>
          <HeaderButtonStyled
            onClick={() => {
              navigate(SIGN_IN_URL);
            }}>
            Войти
          </HeaderButtonStyled>
        </HeaderNavigationButtonsContainerStyled>
      </NavigationMenu>
    </HeaderStyled>
  );
};
