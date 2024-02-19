import styled, { css } from 'styled-components';
import { FlexComponent } from '../../styledComponents/FlexComponent/FlexComponent';

interface Props {
  $isActive: boolean;
}

export const HeaderSideMenuStyled = styled(FlexComponent)<Props>`
  visibility: hidden;

  width: 100%;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
  transform: translateX(100%);
  background-color: ${({ theme }) => theme.colors.blackTheme};

  transition: transform ${({ theme }) => theme.hoverEffect.transition};

  ${({ $isActive }) =>
    $isActive &&
    css`
      visibility: visible;
      transform: translateX(0%);
    `};
`;

export const SideMenuContainerStyled = styled(FlexComponent)`
  position: relative;
  top: 30%;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin-bottom: auto;
`;

export const HeaderSideMenuButtonCloseStyled = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;

  background-color: transparent;

  background-position: center;
  background-repeat: no-repeat;
`;
