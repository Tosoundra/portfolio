import styled, { keyframes } from 'styled-components';

import { FlexComponent } from '../FlexComponent/FlexComponent';

const skeleton = keyframes`
  from{
    translate:-150% -25%
    
  }
  to{
    translate:  150% -25%
  }
`;

interface Props {
  $height?: string;
}

export const SkeletonStyled = styled(FlexComponent)`
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 200%;
    top: 0;
    left: 0;

    background-image: linear-gradient(90deg, transparent 25%, #fff 50%, transparent 75%);
    filter: blur(50px);
    rotate: 45deg;

    animation: ${skeleton} 5s infinite linear;
  }
`;
export const InnerComponentStyled = styled.div<Props>`
  height: ${({ $height }) => $height || '20px'};
  border-radius: 5px;
  background-color: #696969;
`;
