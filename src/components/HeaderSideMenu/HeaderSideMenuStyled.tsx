import styled, { css } from 'styled-components';
import menuCloseButton from '../../assets/images/menu_close-button.svg';
import { FlexComponent } from '../../styledComponents/FlexComponent/FlexComponent';

interface Props {
  $isActive: boolean;
}

export const HeaderSideMenuStyled = styled(FlexComponent)<Props>`
  visibility: hidden;

  width: 100%;
  height: 100vh;
  justify-content: center;

  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
  transform: translateX(100%);
  background-color: #fff;
  color: #000;

  transition: ${({ theme }) => theme.hoverEffect.transition};

  ${({ $isActive }) =>
    $isActive &&
    css`
      visibility: visible;
      transform: translateX(0%);
    `};
`;

export const SideMenuContainerStyled = styled(FlexComponent)`
  align-items: center;
`;

export const HeaderSideMenuButtonCloseStyled = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;

  width: 22px;
  height: 22px;

  background-color: transparent;
  background-image: url(${menuCloseButton});
  background-position: center;
  background-repeat: no-repeat;
`;
