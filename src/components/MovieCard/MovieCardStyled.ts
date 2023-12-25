import styled, { css } from 'styled-components';
import { FlexComponent } from '../../styledComponents/FlexComponent/FlexComponent';
import { ImageStyled } from '../../styledComponents/ImageStyled/ImageStyled';
import { utilitiesColor } from '../../assets/utils/styles/colorsVar';

import buttonInactive from '../../assets/images/button-like.svg';
import buttonActive from '../../assets/images/button-like_active.svg';
import { ButtonStyled } from '../Button/ButtonStyled';
import { hoverEffect } from '../../assets/utils/styles/hoverEffect';

interface ButtonProps {
  isActive: boolean;
}

export const MovieCardStyled = styled(FlexComponent)`
  div {
    margin-top: 14px;
    margin-bottom: 6px;
    padding-bottom: 29px;
    border-bottom: 1px solid ${utilitiesColor};
  }

  & > span {
    color: #a0a0a0;
  }
`;

export const Image = styled(ImageStyled)`
  ${hoverEffect}
  cursor: pointer;
  &:hover {
    transform: scale(110%);
  }
`;

export const LikeButtonStyled = styled(ButtonStyled)<ButtonProps>`
  padding: 12px 12px;
  border-radius: 50%;
  background-color: #d5d5d5;
  background-image: url(${buttonInactive});
  background-position: center;
  background-size: auto;
  background-repeat: no-repeat;

  &:hover {
    background-image: url(${buttonActive});
  }
  ${({ isActive }) =>
    isActive &&
    css`
      background-image: url(${buttonActive});
    `}
`;
