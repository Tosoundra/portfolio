import styled, { css } from 'styled-components';
import { ButtonStyled } from '../../styledComponents/ButtonStyled/ButtonStyled';
import { NavLink } from 'react-router-dom';
import headerMenu from '../../assets/images/header_menu.svg';
import headerMenuWhite from '../../assets/images/header_menu_white.svg';
import { FlexComponent } from '../../styledComponents/FlexComponent/FlexComponent';

interface HeaderProps {
  $isLandingPath?: boolean;
}

export const HeaderStyled = styled.header<HeaderProps>`
  padding-block: 18px;

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

export const HeaderWrapper = styled(FlexComponent)`
  max-width: ${({ theme }) => theme.wrapperProperties.maxWidth};
  padding: ${({ theme }) => theme.wrapperProperties.padding};
  margin: ${({ theme }) => theme.wrapperProperties.margin};
  padding-block: unset;

  div {
    align-items: center;
  }

  @media ${({ theme }) => theme.media.bigPhone} {
    padding-inline: 10px;
  }
`;

export const ButtonProfile = styled(ButtonStyled)`
  border-radius: 40px;
  background-color: #fff;

  color: #000;
  font-family: 'Inter Medium';

  box-shadow: 0 0 4px #00000035;

  img {
    margin-left: 5px;
  }

  @media ${({ theme }) => theme.media.bigPhone} {
    position: absolute;
    bottom: 46px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 13px;
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
    font-family: 'Inter Medium';
    text-decoration: underline;
  }

  &.active button {
    background-color: ${({ theme }) => theme.colors.mainColor};
  }

  @media ${({ theme }) => theme.media.bigPhone} {
    font-size: 10px;
    line-height: 16px;
  }
`;

export const SideMenuNavLink = styled(NavLinkStyled)`
  font-size: 18px;
`;

export const HeaderMenuButtonStyled = styled.button`
  width: 40px;
  height: 43px;

  background-color: transparent;
  background-image: url(${headerMenu});
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto;
`;

export const HeaderMenuWhiteButtonStyled = styled(HeaderMenuButtonStyled)`
  background-image: url(${headerMenuWhite});
`;
