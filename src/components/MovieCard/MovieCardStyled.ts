import styled, { css } from 'styled-components';
import { FlexComponent } from '../../styledComponents/FlexComponent/FlexComponent';
import { ImageStyled } from '../../styledComponents/ImageStyled/ImageStyled';
import buttonInactive from '../../assets/images/button-like.svg';
import buttonActive from '../../assets/images/button-like_active.svg';
import { ButtonStyled } from '../../styledComponents/ButtonStyled/ButtonStyled';
import { MediumFont } from '../../styledComponents/FontComponents/FontComponents';

interface ButtonProps {
  $isActive: boolean;
}

export const MovieCardStyled = styled(FlexComponent)`
  overflow: hidden;

  div {
    margin-top: 14px;
    margin-bottom: 6px;
    padding-bottom: 29px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.utilitiesColor};
  }

  & > span {
    color: #a0a0a0;
  }
`;

export const MovieTitleStyled = styled(MediumFont)`
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const Image = styled(ImageStyled)`
  transition: ${({ theme }) => theme.hoverEffect.transition};

  cursor: pointer;
  &:hover {
    transform: scale(110%);
  }

  @media ${({ theme }) => theme.media.bigPhone} {
    width: 100%;
    height: unset;
  }

  @media ${({ theme }) => theme.media.smallPhone} {
    width: 300px;
    height: 168px;
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

  ${({ $isActive }) =>
    $isActive &&
    css`
      background-image: url(${buttonActive});
    `}
`;
