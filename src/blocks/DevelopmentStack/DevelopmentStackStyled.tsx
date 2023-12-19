import styled from 'styled-components';
import { WrapperDescription } from '../../styledComponents/Wrapper/Wrapper';

export const DevelopmentStackStyled = styled(WrapperDescription)`
  display: flex;
  flex-direction: column;
  align-items: center;

  & p {
    margin-top: 26px;
    margin-bottom: 100px;
  }

  background-color: #202020;

  @media (prefers-color-scheme: light) {
    & {
      color: #000;
      background-color: #fff;
    }
  }
`;

interface TechnologyProps {
  image: string;
}

export const Technology = styled.li<TechnologyProps>`
  width: 90px;
  height: 60px;
  border-radius: 10px;
  background-color: #e8e8e8;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  background-color: transparent;
  background-image: url(${(props) => props.image});
  color: transparent;
`;
