import styled, { css } from 'styled-components';
import { ButtonStyled } from '../../components/Button/ButtonStyled';
import { additionColor, mainColor, welcomeSectionColor } from '../../assets/utils/styles/colorsVar';
import { containerOptions } from '../../assets/utils/styles/containerOptions';
import { NavLink } from 'react-router-dom';

interface HeaderProps {
  $isLogged?: boolean;
}

export const HeaderStyled = styled.header<HeaderProps>`
  background-color: ${welcomeSectionColor};
  color: #fff;
  padding-block: 18px;
  & > div {
    ${containerOptions}
    padding-block:unset;
  }

  div {
    align-items: center;
  }

  ${(props) =>
    props.$isLogged &&
    css`
      color: inherit;
      background-color: inherit;
    `}
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
`;

export const HeaderButtonStyled = styled(ButtonStyled)`
  background-color: ${mainColor};

  &:hover {
    background-color: ${additionColor};
  }
`;

export const NavLinkStyled = styled(NavLink)`
  font-size: 13px;
  line-height: 18px;

  &.active {
    font-family: 'Inter Medium';
  }
`;
