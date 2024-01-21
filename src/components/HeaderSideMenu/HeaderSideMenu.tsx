import React, { FC, SetStateAction } from 'react';
import {
  HeaderSideMenuButtonCloseStyled,
  HeaderSideMenuStyled,
  SideMenuContainerStyled,
} from './HeaderSideMenuStyled';
import { ButtonProfile, NavLinkStyled, SideMenuNavLink } from '../../blocks/Header/HeaderStyled';
import {
  FAVORITE_MOVIES_URL,
  LANDING_URL,
  MOVIES_URL,
  USER_URL,
} from '../../assets/utils/URLs/appURL';
import { useLocation } from 'react-router-dom';
import iconProfile from '../../assets/images/icon_profile_btn.svg';

interface Props {
  isActive: boolean;
  setIsActive: React.Dispatch<SetStateAction<boolean>>;
}

export const HeaderSideMenu: FC<Props> = ({ isActive, setIsActive }) => {
  const { pathname } = useLocation();

  return (
    <HeaderSideMenuStyled as="aside" $direction="column" $isActive={isActive}>
      <HeaderSideMenuButtonCloseStyled onClick={() => setIsActive(false)} />
      <SideMenuContainerStyled $direction="column" $gap="24px">
        <SideMenuNavLink to={LANDING_URL} onClick={() => setIsActive(false)}>
          Главная
        </SideMenuNavLink>
        <SideMenuNavLink to={MOVIES_URL} onClick={() => setIsActive(false)}>
          Фильмы
        </SideMenuNavLink>
        <SideMenuNavLink to={FAVORITE_MOVIES_URL} onClick={() => setIsActive(false)}>
          Сохраненные фильмы
        </SideMenuNavLink>
      </SideMenuContainerStyled>
      <NavLinkStyled to="profile">
        <ButtonProfile
          onClick={() => setIsActive(false)}
          disabled={pathname === USER_URL}
          type="button">
          Аккаунт
          <img src={iconProfile} alt="icon" role="icon" />
        </ButtonProfile>
      </NavLinkStyled>
    </HeaderSideMenuStyled>
  );
};
