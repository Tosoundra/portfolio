import styled from 'styled-components';
import { ButtonStyled } from '../../styledComponents/ButtonStyled/ButtonStyled';
import { FlexComponent } from '../../styledComponents/FlexComponent/FlexComponent';
import { MediumFont } from '../../styledComponents/FontComponents/FontComponents';
import { ImageStyled } from '../../styledComponents/ImageStyled/ImageStyled';

export const ContainerWithCarouselStyled = styled.section`
  &:hover > a > img {
    opacity: 1;
  }
`;

export const CarouselOfMoviesStyled = styled(FlexComponent)`
  padding-block: 20px;
  justify-content: unset;
  gap: 8px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  overscroll-behavior-x: contain;
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
`;

export const TitleOfCarouselStyled = styled.h3`
  display: inline;
  font-size: 22px;
`;

export const ItemOfCarouselStyled = styled.li`
  scroll-snap-align: end;
  @media ${({ theme }) => theme.media.bigPhone} {
    scroll-snap-align: center;
  }
`;

export const ButtonContainerStyled = styled(FlexComponent)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;

  width: 270px;
  height: 151px;
  &:hover button {
    background-color: ${({ theme }) => theme.colors.additionColor};
  }
`;

export const ArrowIconStyled = styled(ImageStyled)`
  display: unset;
  transition: opacity ${({ theme }) => theme.hoverEffect.transition};
  opacity: 0;
  margin-left: 5px;
`;

export const GoToMoreMoviesButtonStyled = styled(ButtonStyled)`
  background-color: ${({ theme }) => theme.colors.utilitiesColor};
  padding: 20px;
  border-radius: 50%;
`;

export const LoadMoreMovieTextStyled = styled(MediumFont)`
  font-size: 15px;
`;
