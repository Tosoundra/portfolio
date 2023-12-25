import { FC, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import iconProfile from '../../assets/images/icon_profile_btn.svg';
import { FlexComponent } from '../../styledComponents/FlexComponent/FlexComponent';
import { ButtonProfile, HeaderButtonStyled, HeaderStyled, NavLinkStyled } from './HeaderStyled';
import { Logo } from '../../components/Logo/Logo';

export const Header: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLogged, setIsLogged] = useState<boolean>(true);
  setIsLogged;
  return (
    <HeaderStyled $isLogged={isLogged}>
      <FlexComponent direction="row">
        <Logo />
        <FlexComponent direction="row" gap="50px">
          {(isLogged && (
            <>
              <NavLinkStyled to="movies">Фильмы</NavLinkStyled>
              <NavLinkStyled to="favorites">Сохранённые фильмы</NavLinkStyled>
            </>
          )) || (
            <>
              <Link to="sign-up">Регистрация</Link>
              <HeaderButtonStyled
                onClick={() => {
                  navigate('sign-in');
                }}>
                Войти
              </HeaderButtonStyled>
            </>
          )}
        </FlexComponent>
        {isLogged && (
          <ButtonProfile
            disabled={location.pathname === '/portfolio/profile'}
            onClick={() => {
              navigate('profile');
            }}
            type="button">
            Аккаунт
            <img src={iconProfile} alt="icon" role="icon" />
          </ButtonProfile>
        )}
      </FlexComponent>
    </HeaderStyled>
  );
};
