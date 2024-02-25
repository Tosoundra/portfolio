import React, { FC, SetStateAction } from 'react';
import {
  HeaderSideMenuButtonCloseStyled,
  HeaderSideMenuStyled,
  SideMenuContainerStyled,
} from './HeaderSideMenuStyled';
import { ButtonProfile, SideMenuNavLink } from '../../blocks/Header/HeaderStyled';
import { FAVORITE_MOVIES_URL, LANDING_URL, MOVIES_URL } from '../../API/appURL';
import iconProfile from '../../assets/images/icon_profile_btn.svg';
import { ImageStyled } from '../../styledComponents/ImageStyled/ImageStyled';
import closeButton from '../../assets/images/menu_close-button.svg';
interface Props {
  isActive: boolean;
  setIsActive: React.Dispatch<SetStateAction<boolean>>;
}

export const HeaderSideMenu: FC<Props> = ({ isActive, setIsActive }) => {
  return (
    <HeaderSideMenuStyled as="aside" $isActive={isActive}>
      <HeaderSideMenuButtonCloseStyled onClick={() => setIsActive(false)}>
        <ImageStyled src={closeButton} width={22} height={22} />
      </HeaderSideMenuButtonCloseStyled>
      <SideMenuContainerStyled>
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

      <ButtonProfile to="profile" onClick={() => setIsActive(false)}>
        Аккаунт
        <img src={iconProfile} alt="icon" role="icon" />
      </ButtonProfile>
    </HeaderSideMenuStyled>
  );
};
