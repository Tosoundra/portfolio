import styled from 'styled-components';
import { SkeletonStyled } from '../SkeletonStyled';

export const MovieSkeletonStyled = styled(SkeletonStyled)`
  width: 250px;

  @media ${({ theme }) => theme.media.bigPhone} {
    width: inherit;
  }
`;
