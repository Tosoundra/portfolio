import { FC, memo } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import iconProfile from '../../assets/images/icon_profile_btn.svg';
import { FlexComponent } from '../../styledComponents/FlexComponent/FlexComponent';
import {
  ButtonProfile,
  HeaderButtonStyled,
  HeaderStyled,
  HeaderWrapper,
  NavLinkStyled,
} from './HeaderStyled';

import { LogoStyled } from '../../styledComponents/Logo/LogoStyled';
import { LANDING_URL, SIGN_IN_URL, SIGN_UP_URL, USER_URL } from '../../assets/utils/URLs/appURL';
import { useAppSelector } from '../../assets/hooks/storeHooks/storeHooks';
import { useCalculateDimensions } from '../../assets/hooks/useCalculateDimensions/useCalculateDimensions';
import { HeaderMobile } from './HeaderMobile';

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
        <HeaderWrapper $direction="row">
          <a href={LANDING_URL}>
            <LogoStyled />
          </a>
          <FlexComponent $direction="row" $gap="50px">
            <NavLinkStyled to="movies">Фильмы</NavLinkStyled>
            <NavLinkStyled to="favorites">Сохранённые фильмы</NavLinkStyled>
          </FlexComponent>
          <NavLinkStyled to="profile">
            <ButtonProfile disabled={pathname === USER_URL} type="button">
              Аккаунт
              <img src={iconProfile} alt="icon" role="icon" />
            </ButtonProfile>
          </NavLinkStyled>
        </HeaderWrapper>
      </HeaderStyled>
    );
  }

  return (
    <HeaderStyled $isLandingPath={pathname === LANDING_URL}>
      <HeaderWrapper $direction="row">
        <a href={LANDING_URL}>
          <LogoStyled />
        </a>
        <FlexComponent $direction="row" $gap="50px">
          <Link to={SIGN_UP_URL}>Регистрация</Link>
          <HeaderButtonStyled
            onClick={() => {
              navigate(SIGN_IN_URL);
            }}>
            Войти
          </HeaderButtonStyled>
        </FlexComponent>
      </HeaderWrapper>
    </HeaderStyled>
  );
});
