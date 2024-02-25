import styled, { keyframes } from 'styled-components';
import { FlexComponent } from '../../styledComponents/FlexComponent/FlexComponent';
import { ButtonStyled } from '../../styledComponents/ButtonStyled/ButtonStyled';
import { DescriptionText, MediumFont } from '../../styledComponents/FontComponents/FontComponents';

const expandContainer = keyframes`
  from{
    height:0;
  }
  to{
    height:calc(100vh - 73.5px - 80px - 40px)
  }
`;

const showElementBottom = keyframes`
    from{
    opacity: 0;
    transform:translateY(50%)
  }
  to{
    opacity: 1;
    transform:translateY(0)
  }
`;

const showElementTop = keyframes`
    from{
    opacity: 0;
    transform:translateY(-100%)
  }
  to{
    opacity: 1;
    transform:translateY(0)
  }
`;

interface Props {
  $isDescriptionTab: boolean;
}

export const MovieCardDetailsStyled = styled.article<{ $src: string }>`
  position: relative;
  background-image: ${({ $src }) => `url(${$src})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  width: 100%;

  color: #fff;
  scroll-margin: 15vh;

  &::before {
    content: '';
    background-image: linear-gradient(90deg, #000 30%, transparent);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    @media ${({ theme }) => theme.media.bigPhone} {
      background-image: linear-gradient(0, #000 30%, transparent);
    }
  }
`;

export const Blur = styled.div<Props>`
  padding-block: 20px;
  width: 100%;
  height: 100%;
  backdrop-filter: ${({ $isDescriptionTab }) => ($isDescriptionTab ? 'blur(10px)' : 'unset')};

  transition: backdrop-filter ${({ theme }) => theme.hoverEffect.transition};
`;

export const MovieInfoWrapper = styled(FlexComponent)`
  position: relative;
  animation: ${expandContainer} 0.5s cubic-bezier(0.51, -0.01, 0.32, 1) forwards;
  flex-direction: column;

  @media ${({ theme }) => theme.media.bigPhone} {
    height: unset;
  }
`;

export const MovieInfoContainerStyled = styled(FlexComponent)`
  margin-block: auto;
  width: 50%;
  flex-direction: column;
  gap: 20px;

  @media ${({ theme }) => theme.media.bigPhone} {
    margin-block: unset;
    width: 100%;
    text-align: center;
  }
`;

export const MovieNavigationMenuStyled = styled(FlexComponent)`
  @media ${({ theme }) => theme.media.bigPhone} {
    justify-content: flex-end;
  }
`;

export const MenuTabStyled = styled(FlexComponent)`
  margin: auto;

  @media ${({ theme }) => theme.media.bigPhone} {
    display: none;
  }
`;

export const NavigationMenuButtonStyled = styled(ButtonStyled)`
  background-color: unset;
  &:disabled {
    background-color: #222222;
  }
`;

export const ButtonCloseContainer = styled(ButtonStyled)`
  margin-right: 20px;
  padding: unset;
  background-color: unset;

  &:hover {
    background-color: unset;
  }
`;

export const InfoWrapper = styled(FlexComponent)<Props>`
  display: ${({ $isDescriptionTab }) => $isDescriptionTab && 'none'};
  flex-direction: column;
  gap: 20px;
`;

export const MovieTitle = styled(MediumFont)<Props>`
  font-size: 55px;

  /* font-size: ${({ $isDescriptionTab }) => ($isDescriptionTab && '20px') || '55px'}; */
  translate: ${({ $isDescriptionTab }) => $isDescriptionTab && '-20%'};
  scale: ${({ $isDescriptionTab }) => $isDescriptionTab && '.6'};
  transition: scale ${({ theme }) => theme.hoverEffect.transition},
    translate ${({ theme }) => theme.hoverEffect.transition};
  animation: ${showElementTop} 0.5s cubic-bezier(0.51, -0.01, 0.32, 1);
  @media ${({ theme }) => theme.media.bigPhone} {
    font-size: 30px;
  }
`;

export const MovieDetailsContainer = styled(FlexComponent)<Props>`
  display: ${({ $isDescriptionTab }) => $isDescriptionTab && 'none'};
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  color: #ffffff8b;

  animation: ${showElementTop} 0.5s cubic-bezier(0.51, -0.01, 0.32, 1);
`;

export const MovieDescriptionShort = styled(DescriptionText)<Props>`
  font-size: 18px;

  text-overflow: ${({ $isDescriptionTab }) => $isDescriptionTab && 'ellipsis'};
  white-space: ${({ $isDescriptionTab }) => $isDescriptionTab && 'nowrap'};
  overflow: ${({ $isDescriptionTab }) => $isDescriptionTab && 'hidden'};
  animation: ${showElementBottom} 0.5s cubic-bezier(0.51, -0.01, 0.32, 1);

  @media ${({ theme }) => theme.media.bigPhone} {
    text-align: left;
  }
`;

export const MovieDescription = styled(MovieDescriptionShort)`
  text-overflow: unset;
  white-space: unset;
  overflow: unset;
`;
