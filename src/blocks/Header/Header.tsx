import { FC, memo } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import iconProfile from '../../assets/images/icon_profile_btn.svg';
import { FlexComponent } from '../../styledComponents/FlexComponent/FlexComponent';
import {
  ButtonProfile,
  HeaderButtonStyled,
  HeaderStyled,
  NavLinkStyled,
  NavigationMenu,
} from './HeaderStyled';
import { LANDING_URL, SIGN_IN_URL, SIGN_UP_URL } from '../../constants/URLs/appURL';
import { useAppSelector } from '../../assets/hooks/storeHooks/storeHooks';
import { useCalculateDimensions } from '../../assets/hooks/useCalculateDimensions/useCalculateDimensions';
import { HeaderMobile } from './HeaderMobile';
import { Logo } from '../../components/Logo/Logo';

export const Header: FC = memo(() => {
  const { isMobile } = useCalculateDimensions();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { isLogged } = useAppSelector((state) => state.logged);

  if (isMobile) {
    return <HeaderMobile isLogged={isLogged} />;
  }

  if (isLogged) {
    return (
      <HeaderStyled $isLandingPath={pathname === LANDING_URL}>
        <NavigationMenu as="nav" $direction="row">
          <Logo />
          <FlexComponent $direction="row" $gap="50px">
            <NavLinkStyled to="movies">Фильмы</NavLinkStyled>
            <NavLinkStyled to="favorites">Сохранённые фильмы</NavLinkStyled>
          </FlexComponent>

          <ButtonProfile to="profile">
            Аккаунт
            <img src={iconProfile} alt="icon" role="icon" />
          </ButtonProfile>
        </NavigationMenu>
      </HeaderStyled>
    );
  }

  return (
    <HeaderStyled $isLandingPath={pathname === LANDING_URL}>
      <NavigationMenu as="nav" $direction="row">
        <Logo />
        <FlexComponent $direction="row" $gap="50px">
          <Link to={SIGN_UP_URL}>Регистрация</Link>
          <HeaderButtonStyled
            onClick={() => {
              navigate(SIGN_IN_URL);
            }}>
            Войти
          </HeaderButtonStyled>
        </FlexComponent>
      </NavigationMenu>
    </HeaderStyled>
  );
});
