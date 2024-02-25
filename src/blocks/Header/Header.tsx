import { FC, memo, useLayoutEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import iconProfile from '../../assets/images/icon_profile_btn.svg';
import SearchIcon from '../../assets/images/searchIcon.svg';
import { Logo } from '../../components/Logo/Logo';
import { SearchMovieDropdownMenu } from '../../components/SearchMovieDropdownMenu/SearchMovieDropdownMenu';
import { LANDING_URL, SIGN_IN_URL, SIGN_UP_URL } from '../../API/appURL';
import { useAppSelector } from '../../hooks/storeHooks/storeHooks';
import { useCalculateDimensions } from '../../hooks/useCalculateDimensions/useCalculateDimensions';
import { useScrollY } from '../../hooks/useScrollY/useScrollY';
import { ImageStyled } from '../../styledComponents/ImageStyled/ImageStyled';
import { HeaderMobile } from './HeaderMobile';
import {
  ButtonProfile,
  HeaderButtonStyled,
  HeaderNavigationButtonsContainerStyled,
  HeaderSignUpLinkStyled,
  HeaderStyled,
  NavLinkStyled,
  NavigationMenu,
  SearchButton,
} from './HeaderStyled';

export const Header: FC = memo(() => {
  const navigate = useNavigate();
  const { isHidden } = useScrollY();
  const { pathname } = useLocation();
  const { isMobile } = useCalculateDimensions();
  const { movies } = useAppSelector((state) => state.movies);
  const { isLogged } = useAppSelector((state) => state.logged);

  const [isSearchInputActive, setIsSearchInputActive] = useState(false);

  useLayoutEffect(() => {
    if (isHidden) {
      setIsSearchInputActive(false);
    }
  }, [isHidden]);

  if (isMobile) {
    return (
      <HeaderMobile
        isLogged={isLogged}
        isHidden={isHidden}
        isSearchInputActive={isSearchInputActive}
        movies={movies}
        setIsSearchInputActive={setIsSearchInputActive}
      />
    );
  }

  if (isSearchInputActive) {
    return (
      <HeaderStyled $isHidden={isHidden} $isLandingPath={pathname === LANDING_URL}>
        <NavigationMenu as="nav">
          <Logo />
          <SearchMovieDropdownMenu
            movies={movies}
            isSearchInputActive={isSearchInputActive}
            setIsSearchInputActive={setIsSearchInputActive}
          />
          <ButtonProfile to="profile">
            Аккаунт
            <img src={iconProfile} alt="icon" role="icon" />
          </ButtonProfile>
        </NavigationMenu>
      </HeaderStyled>
    );
  }

  if (isLogged) {
    return (
      <HeaderStyled $isHidden={isHidden} $isLandingPath={pathname === LANDING_URL}>
        <NavigationMenu as="nav">
          <Logo />
          <HeaderNavigationButtonsContainerStyled>
            <NavLinkStyled to="movies" preventScrollReset>
              Фильмы
            </NavLinkStyled>
            <NavLinkStyled to="favorites" preventScrollReset>
              Сохранённые фильмы
            </NavLinkStyled>
            <SearchButton
              onClick={(e) => {
                e.stopPropagation();
                setIsSearchInputActive(true);
              }}
              type="button">
              <ImageStyled src={SearchIcon} width={24} height={24} alt="icon" />
            </SearchButton>
          </HeaderNavigationButtonsContainerStyled>

          <ButtonProfile to="profile">
            Аккаунт
            <img src={iconProfile} alt="icon" role="icon" />
          </ButtonProfile>
        </NavigationMenu>
      </HeaderStyled>
    );
  }

  return (
    <HeaderStyled $isHidden={isHidden} $isLandingPath={pathname === LANDING_URL}>
      <NavigationMenu as="nav">
        <Logo />
        <HeaderNavigationButtonsContainerStyled>
          <HeaderSignUpLinkStyled to={SIGN_UP_URL}>Регистрация</HeaderSignUpLinkStyled>
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
});
