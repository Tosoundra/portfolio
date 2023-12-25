import styled, { keyframes } from 'styled-components';

import { FlexComponent } from '../../styledComponents/FlexComponent/FlexComponent';

const skeleton = keyframes`
  from{
    translate:-150% -25%
    
  }
  to{
    translate:  150% -25%
  }
`;

export const SkeletonStyled = styled(FlexComponent)`
  position: relative;
  overflow: hidden;

  & > * {
    border-radius: 5px;
    display: block;
    background-color: #696969;
  }

  div:first-of-type {
    width: 270px;
    height: 151px;
  }

  div:last-of-type {
    height: 20px;
  }

  span {
    height: 20px;
  }

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
