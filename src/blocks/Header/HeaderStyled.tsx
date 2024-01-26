import styled, { css } from 'styled-components';
import { ButtonStyled } from '../../styledComponents/ButtonStyled/ButtonStyled';
import { NavLink } from 'react-router-dom';
import { FlexComponent } from '../../styledComponents/FlexComponent/FlexComponent';

interface HeaderProps {
  $isLandingPath?: boolean;
  $isDarkMode?: boolean;
}

export const HeaderStyled = styled.header<HeaderProps>`
  padding-block: 18px;

  background-color: ${({ theme }) => (theme.colorScheme.dark && theme.colors.blackTheme) || '#fff'};

  ${({ $isLandingPath }) =>
    $isLandingPath &&
    css`
      color: #fff;
      background-color: ${({ theme }) => theme.colors.welcomeSectionColor};
    `}

  @media ${({ theme }) => theme.media.bigPhone} {
    position: sticky;
    top: 0;
    left: 0;
    z-index: 1;
  }
`;

export const NavigationMenu = styled(FlexComponent)`
  max-width: ${({ theme }) => theme.wrapperProperties.maxWidth};
  padding: ${({ theme }) => theme.wrapperProperties.padding};
  margin: ${({ theme }) => theme.wrapperProperties.margin};

  align-items: center;
  padding-block: unset;
  
  div {
    align-items: center;
  }
  
  @media ${({ theme }) => theme.media.bigPhone} {
    padding-inline: 10px;
  }
`;

export const HeaderButtonStyled = styled(ButtonStyled)`
  background-color: ${({ theme }) => theme.colors.mainColor};

  &:hover {
    background-color: ${({ theme }) => theme.colors.additionColor};
  }

  @media ${({ theme }) => theme.media.bigPhone} {
    font-size: 10px;
    line-height: 16px;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  font-size: 13px;
  line-height: 18px;

  &.active {
    font-weight: 500;
    text-decoration: underline;
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
    margin-bottom: 10%;

    font-size: 13px;
  }
`;
