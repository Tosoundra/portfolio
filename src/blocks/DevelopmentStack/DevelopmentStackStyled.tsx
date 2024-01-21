import styled from 'styled-components';
import { ImageStyled } from '../../styledComponents/ImageStyled/ImageStyled';
import { FlexComponent } from '../../styledComponents/FlexComponent/FlexComponent';

export const DevelopmentStackStyled = styled(FlexComponent)`
  align-items: center;
  margin-top: 90px;
  text-align: center;
`;

export const ListOfTechnologiesStyled = styled(FlexComponent)`
  margin-top: 100px;

  @media ${({ theme }) => theme.media.bigPhone} {
    flex-wrap: wrap;
    justify-content: flex-start;
    row-gap: 8px;
  }

  @media ${({ theme }) => theme.media.smallPhone} {
    justify-content: center;
  }
`;

export const ImageTechnology = styled(ImageStyled)`
  object-fit: contain;
`;
