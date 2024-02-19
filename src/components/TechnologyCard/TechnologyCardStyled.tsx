import styled from 'styled-components';
import { ImageStyled } from '../../styledComponents/ImageStyled/ImageStyled';

export const TechnologyCardStyled = styled.div`
  position: relative;

  transition: transform ${({ theme }) => theme.hoverEffect.transition};

  &:hover {
    transform: translateY(10%);
  }
`;

export const TechnologyDescriptionContainer = styled.div`
  visibility: hidden;
  width: 200%;
  padding: 10px 5px;
  border-radius: 10px;
  position: absolute;
  bottom: 100px;
  right: 50%;

  transform: translate(50%, -25%);

  opacity: 0;
  transition: opacity ${({ theme }) => theme.hoverEffect.transition},
    transform ${({ theme }) => theme.hoverEffect.transition};

  background-color: ${({ theme }) => theme.colors.utilitiesColor};

  color: ${({ theme }) => theme.colors.blackTheme};
  font-size: 13px;

  &:after {
    content: ' ';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent;
    border-top-color: ${({ theme }) => theme.colors.utilitiesColor};
  }

  @media ${({ theme }) => theme.media.bigPhone} {
    bottom: 70px;
    width: 100px;
    font-size: 10px;
  }
`;

export const ImageTechnology = styled(ImageStyled)`
  object-fit: contain;
  cursor: pointer;

  &:hover + div {
    visibility: visible;
    opacity: 1;
    transform: translate(50%, 0%);
  }
`;
