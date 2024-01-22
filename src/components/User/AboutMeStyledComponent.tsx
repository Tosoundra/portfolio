import styled from 'styled-components';
import { FlexComponent } from '../../styledComponents/FlexComponent/FlexComponent';
import { ImageStyled } from '../../styledComponents/ImageStyled/ImageStyled';
import { MediumFont } from '../../styledComponents/FontComponents/FontComponents';

export const AboutMeStyled = styled(FlexComponent)`
  padding-top: 66px;

  & a {
    align-self: flex-start;
  }

  @media ${({ theme }) => theme.media.bigPhone} {
    gap: 40px;
    flex-direction: column;
  }
`;

export const AboutMeDescriptionContainer = styled(FlexComponent)`
  width: 70%;
  @media ${({ theme }) => theme.media.bigPhone} {
    width: unset;
    gap: 20px;
    order: 1;
  }
`;

export const OccupationTextStyle = styled(MediumFont)`
  line-height: 20px;
`;

export const PhotoStyled = styled(ImageStyled)`
  border-radius: 10px;

  @media ${({ theme }) => theme.media.bigPhone} {
    width: 100%;
    height: unset;
  }
`;
