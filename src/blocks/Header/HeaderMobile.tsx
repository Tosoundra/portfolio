import { useLocation, useNavigate } from 'react-router-dom';
import { LANDING_URL, SIGN_IN_URL } from '../../constants/URLs/appURL';
import { FlexComponent } from '../../styledComponents/FlexComponent/FlexComponent';
import { HeaderButtonStyled, HeaderStyled, NavLinkStyled, NavigationMenu } from './HeaderStyled';
import { FC, useEffect, useState } from 'react';
import { HeaderSideMenu } from '../../components/HeaderSideMenu/HeaderSideMenu';
import { LogoStyled } from '../../components/Logo/LogoStyled';
import { HeaderMobileMenu } from '../../components/HeaderMobileMenu/HeaderMobileMenu';

interface Props {
  isLogged: boolean;
}

export const HeaderMobile: FC<Props> = ({ isLogged }) => {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (isActive) document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'initial';
    };
  }, [isActive]);

  if (isLogged) {
    return (
      <>
        <HeaderStyled $isLandingPath={pathname === LANDING_URL}>
          <NavigationMenu as="nav" $direction="row">
            <LogoStyled
              onClick={() => {
                navigate(LANDING_URL);
              }}
              type="button"
            />
            <HeaderMobileMenu setIsActive={setIsActive} />
          </NavigationMenu>
        </HeaderStyled>
        <HeaderSideMenu isActive={isActive} setIsActive={setIsActive} />
      </>
    );
  }

  return (
    <HeaderStyled $isLandingPath={pathname === LANDING_URL}>
      <NavigationMenu as="nav" $direction="row">
        <LogoStyled
          onClick={() => {
            navigate(LANDING_URL);
          }}
          type="button"
        />
        <FlexComponent $direction="row" $gap="14px">
          <NavLinkStyled to="sign-up">Регистрация</NavLinkStyled>
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
};
