import styled, { css } from 'styled-components';
import { ButtonStyled } from '../../styledComponents/ButtonStyled/ButtonStyled';
import { Link, NavLink } from 'react-router-dom';
import { FlexComponent } from '../../styledComponents/FlexComponent/FlexComponent';

export const HeaderStyled = styled.header<{ $isLandingPath: boolean; $isHidden: boolean }>`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 2;

  background-color: ${({ theme }) => theme.colors.blackTheme};
  box-shadow: ${({ theme }) => theme.colors.blackTheme} 0 5px 10px;
  padding-block: 16px;

  transform: ${({ $isHidden }) => ($isHidden ? 'translateY(calc(-100% - 15px))' : 'translateY(0)')};

  transition: ${({ theme }) => theme.hoverEffect.transition};

  ${({ $isLandingPath }) =>
    $isLandingPath &&
    css`
      background-color: ${({ theme }) => theme.colors.welcomeSectionColor};
      box-shadow: ${({ theme }) => theme.colors.welcomeSectionColor} 0 5px 10px;
    `}

  @media ${({ theme }) => theme.media.bigPhone} {
    top: 0;
    left: 0;
    z-index: 1;
  }
`;

export const NavigationMenu = styled(FlexComponent)`
  padding: ${({ theme }) => theme.wrapperProperties.padding};

  position: relative;

  align-items: center;
  padding-block: unset;

  & > div {
    align-items: center;
  }

  @media ${({ theme }) => theme.media.bigPhone} {
    padding-inline: 10px;
  }
`;

export const HeaderNavigationButtonsContainerStyled = styled(FlexComponent)`
  gap: 50px;
  @media ${({ theme }) => theme.media.bigPhone} {
    gap: 14px;
  }
`;

export const HeaderSignUpLinkStyled = styled(Link)`
  @media ${({ theme }) => theme.media.bigPhone} {
    font-size: 20px;
    line-height: 16px;
  }
`;

export const HeaderButtonStyled = styled(ButtonStyled)`
  background-color: ${({ theme }) => theme.colors.mainColor};

  &:hover {
    background-color: ${({ theme }) => theme.colors.additionColor};
  }

  @media ${({ theme }) => theme.media.bigPhone} {
    font-size: 20px;
    line-height: 16px;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  font-size: 15px;
  line-height: 18px;
  font-weight: 500;
  padding-bottom: 5px;
  border-bottom: transparent 3px solid;
  &.active {
    border-bottom-color: ${({ theme }) => theme.colors.mainColor};
  }

  @media ${({ theme }) => theme.media.bigPhone} {
    font-size: 10px;
    line-height: 16px;
  }
`;

export const SideMenuNavLink = styled(NavLinkStyled)`
  font-size: 18px;
`;

export const ButtonProfile = styled(NavLink)`
  display: block;
  padding: 9px 20px;
  border-radius: 40px;
  background-color: #fff;

  color: #000;
  font-family: 'Inter';
  font-weight: 500;

  box-shadow: 0 0 4px #00000035;

  transition: ${({ theme }) => theme.hoverEffect.transition};

  &:hover {
    background-color: ${({ theme }) => theme.colors.mainColor};
  }

  &.active {
    background-color: ${({ theme }) => theme.colors.mainColor};
  }

  img {
    margin-left: 5px;
  }

  @media ${({ theme }) => theme.media.bigPhone} {
    margin-bottom: 30%;

    font-size: 13px;
  }
`;

export const SearchButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
