import styled from 'styled-components';
import { InnerComponentStyled, SkeletonStyled } from '../SkeletonStyled';

export const ProfileSkeletonStyled = styled(SkeletonStyled)`
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;
export const ProfileInnerComponentStyled = styled(InnerComponentStyled)`
  width: 410px;

  &:first-of-type {
    margin-bottom: 128px;
  }
`;
