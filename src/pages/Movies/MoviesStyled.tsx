import styled from 'styled-components';
import { Wrapper } from '../../styledComponents/Wrapper/Wrapper';

export const MoviesStyled = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  gap: 118px;

  @media ${({ theme }) => theme.media.bigPhone} {
    gap: 64px;
  }
`;
