import styled from 'styled-components';
import { ImageStyled } from '../../styledComponents/ImageStyled/ImageStyled';

export const TechnologyCardStyled = styled.li`
  position: relative;

  transition: ${({ theme }) => theme.hoverEffect.transition};

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
  transition: ${({ theme }) => theme.hoverEffect.transition};

  background-color: ${({ theme }) => theme.colors.utilitiesColor};

  color: ${({ theme }) => (theme.colorScheme.dark ? '#000' : '#fff')};

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
`;

export const ImageTechnology = styled(ImageStyled)`
  object-fit: contain;
  cursor: pointer;
  transition: ${({ theme }) => theme.hoverEffect.transition};

  &:hover + div {
    visibility: visible;
    opacity: 1;
    transform: translate(50%, 0%);
  }
`;
