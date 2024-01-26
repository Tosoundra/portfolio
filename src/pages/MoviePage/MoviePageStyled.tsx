import styled from 'styled-components';
import { ImageStyled } from '../../styledComponents/ImageStyled/ImageStyled';
import { DescriptionText, MediumFont } from '../../styledComponents/FontComponents/FontComponents';
import { FlexComponent } from '../../styledComponents/FlexComponent/FlexComponent';

export const MovieInfoContainer = styled(FlexComponent)`
  margin-top: 48px;

  @media ${({ theme }) => theme.media.bigPhone} {
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 16px;
  }
`;

export const MovieTitleStyled = styled(MediumFont)`
  @media ${({ theme }) => theme.media.bigPhone} {
    font-size: 16px;
  }
`;

export const MainPictureContainerStyled = styled.div`
  width: 100%;
  position: relative;

  span {
    position: absolute;
    left: 50px;
    bottom: 50px;
    z-index: 2;
    font-family: 'Inter Medium';
    font-size: 50px;
    line-height: 55px;
    color: #fff;
    @media ${({ theme }) => theme.media.bigPhone} {
      display: none;
    }
  }
  &::before {
    display: block;
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    background-color: #00000057;
  }
`;

export const MovieMainPictureStyled = styled(ImageStyled)`
  width: 100%;
  max-height: 557px;
  height: 100%;
  object-fit: cover;

  @media ${({ theme }) => theme.media.bigPhone} {
    height: unset;
    min-height: 132px;
  }
`;

export const ListOfMovieInformationStyled = styled(FlexComponent)`
  justify-content: unset;
  flex: 1;
`;

export const MoviePosterStyled = styled(ImageStyled)`
  object-fit: cover;

  @media ${({ theme }) => theme.media.bigPhone} {
    width: 75px;
    height: 112px;
  }
`;

export const LabelStyled = styled.span`
  font-size: 16px;
  line-height: 19px;

  @media ${({ theme }) => theme.media.bigPhone} {
    font-size: 14px;
  }
`;

export const MovieDetails = styled.span`
  font-size: 20px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.mainColor};

  @media ${({ theme }) => theme.media.bigPhone} {
    font-size: 16px;
  }
`;

export const MovieDescriptionStyled = styled(DescriptionText)`
  line-height: 33px;

  @media ${({ theme }) => theme.media.bigPhone} {
    font-size: 18px;
  }
`;
