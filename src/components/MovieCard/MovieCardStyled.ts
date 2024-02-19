import styled, { css } from 'styled-components';
import { FlexComponent } from '../../styledComponents/FlexComponent/FlexComponent';
import { ImageStyled } from '../../styledComponents/ImageStyled/ImageStyled';
import { MediumFont } from '../../styledComponents/FontComponents/FontComponents';

export const MovieCardStyled = styled(FlexComponent)<{ $isSelected: boolean }>`
  position: relative;
  z-index: 0;

  border: transparent 1px solid;
  border-color: ${({ $isSelected }) => $isSelected && '#fff'};
  flex-direction: column;

  transition: box-shadow ${({ theme }) => theme.hoverEffect.transition},
    z-index ${({ theme }) => theme.hoverEffect.transition},
    transform ${({ theme }) => theme.hoverEffect.transition};

  ${({ $isSelected }) =>
    $isSelected &&
    css`
      &:after {
        content: ' ';
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border: transparent 7px solid;
        border-top-color: ${({ theme }) => theme.colors.utilitiesColor};
      }
    `}

  &:hover {
    box-shadow: ${({ theme }) => theme.colors.blackTheme} 0 0 20px 20px;
    z-index: 1;
    transform: scale(105%);
  }
`;

export const MovieTitleContainerStyled = styled(FlexComponent)`
  margin-top: 14px;
`;

export const MovieTitleStyled = styled(MediumFont)`
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const Image = styled(ImageStyled)<{ $isAllMoviesPage: boolean }>`
  width: calc((100vw - 70px * 2 - 8px * 4) / 4);
  object-fit: cover;
  cursor: pointer;

  @media ${({ theme }) => theme.media.bigPhone} {
    width: 300px;
    height: 168px;
  }
`;
