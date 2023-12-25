import styled, { css } from 'styled-components';
import { errorColor, mainColor, utilitiesColor } from '../../assets/utils/styles/colorsVar';

interface Props {
  isActive: boolean;
  isError: boolean;
}

export const InfoTooltipStyled = styled.div<Props>`
  position: fixed;
  top: 0;
  right: 0;
  width: 200px;

  height: 75px;
  border: 1px solid ${utilitiesColor};
  box-shadow: 0px 0px 7px ${mainColor};

  border-radius: 3px;
  display: flex;
  flex-direction: column;

  translate: 100%;
  transition: all 0.5s ease-in-out;

  ${({ isActive }) =>
    isActive &&
    css`
      translate: -10%;
    `};

  ${({ isError }) =>
    isError &&
    css`
      box-shadow: ${errorColor};
    `}
`;
