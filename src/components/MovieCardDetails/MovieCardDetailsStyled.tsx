import styled, { keyframes } from 'styled-components';
import { FlexComponent } from '../../styledComponents/FlexComponent/FlexComponent';
import { ButtonStyled } from '../../styledComponents/ButtonStyled/ButtonStyled';
import { DescriptionText, MediumFont } from '../../styledComponents/FontComponents/FontComponents';

const expandContainer = keyframes`
  from{
    height:0;
  }
  to{
    height:calc(100vh - 73.5px - 80px)
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

export const Blur = styled.div<{ $isDetailsTab: boolean }>`
  padding-block: 20px;
  width: 100%;
  height: 100%;
  backdrop-filter: ${({ $isDetailsTab }) => ($isDetailsTab ? 'blur(10px)' : 'unset')};

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
  justify-content: center;

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

export const MovieTitle = styled(MediumFont)`
  display: unset;
  font-size: 55px;

  animation: ${showElementTop} 0.5s cubic-bezier(0.51, -0.01, 0.32, 1);
  @media ${({ theme }) => theme.media.bigPhone} {
    font-size: 30px;
  }
`;

export const MovieDetailsContainer = styled(FlexComponent)`
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  color: #ffffff8b;

  animation: ${showElementTop} 0.5s cubic-bezier(0.51, -0.01, 0.32, 1);
`;

export const MovieDescription = styled(DescriptionText)<{ $isAboutTab: boolean }>`
  font-size: 18px;

  text-overflow: ${({ $isAboutTab }) => $isAboutTab && 'ellipsis'};
  white-space: ${({ $isAboutTab }) => $isAboutTab && 'nowrap'};
  overflow: ${({ $isAboutTab }) => $isAboutTab && 'hidden'};
  animation: ${showElementBottom} 0.5s cubic-bezier(0.51, -0.01, 0.32, 1);

  @media ${({ theme }) => theme.media.bigPhone} {
    text-align: left;
  }
`;
