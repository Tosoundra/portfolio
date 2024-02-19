import styled from 'styled-components';
import { FlexComponent } from '../../styledComponents/FlexComponent/FlexComponent';

export const DevelopmentStackStyled = styled(FlexComponent)`
  margin-top: 90px;
  flex-direction: column;
  align-items: center;
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
