import styled, { css } from 'styled-components';

interface Props {
  display?: string;
  height?: string;
  color?: string;
  $lightTheme?: boolean;
  image?: string;
  margin?: string;
}

export const Wrapper = styled.section<Props>`
  display: ${(props) => props.display};
  height: ${(props) => props.height};
  flex-direction: column;
  justify-content: center;

  align-items: baseline;
  padding: 100px 70px;
  background-color: ${(props) => props.color};
  ${({ $lightTheme }) =>
    $lightTheme &&
    css`
      color: #fff;
    `};
`;

export const WrapperWithBackground = styled(Wrapper)`
  padding: 0px 70px;
  background-image: url(${(props) => props.image});
  background-size: auto;
  background-position: calc(100% - 70px) center;
  background-repeat: no-repeat;
`;

export const WrapperDescription = styled(Wrapper)`
  padding: unset;
  margin-top: ${(props) => props.margin};
`;
