import { useLocation, useNavigate } from 'react-router-dom';
import { LANDING_URL, SIGN_IN_URL } from '../../assets/utils/URLs/appURL';
import { FlexComponent } from '../../styledComponents/FlexComponent/FlexComponent';
import {
  HeaderButtonStyled,
  HeaderMenuButtonStyled,
  HeaderMenuWhiteButtonStyled,
  HeaderStyled,
  HeaderWrapper,
  NavLinkStyled,
} from './HeaderStyled';
import { FC, useState } from 'react';
import { HeaderSideMenu } from '../../components/HeaderSideMenu/HeaderSideMenu';
import { LogoStyled } from '../../components/Logo/LogoStyled';

interface Props {
  isLogged: boolean;
}

export const HeaderMobile: FC<Props> = ({ isLogged }) => {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  if (isLogged) {
    return (
      <HeaderStyled $isLandingPath={pathname === LANDING_URL}>
        <HeaderWrapper $direction="row">
          <LogoStyled
            onClick={() => {
              navigate(LANDING_URL);
            }}
            type="button"
          />
          {(pathname === LANDING_URL && (
            <HeaderMenuWhiteButtonStyled onClick={() => setIsActive(true)} />
          )) || <HeaderMenuButtonStyled onClick={() => setIsActive(true)} />}

          <HeaderSideMenu isActive={isActive} setIsActive={setIsActive} />
        </HeaderWrapper>
      </HeaderStyled>
    );
  }

  return (
    <HeaderStyled $isLandingPath={pathname === LANDING_URL}>
      <HeaderWrapper $direction="row">
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
      </HeaderWrapper>
    </HeaderStyled>
  );
};
