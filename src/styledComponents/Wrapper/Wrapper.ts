import styled from 'styled-components';

interface Props {
  display?: string;
  height?: string;
  color?: string;
  $lightTheme?: boolean;
  image?: string;
  margin?: string;
}

export const Wrapper = styled.section<Props>`
  padding: 100px 70px;
`;

export const WrapperDescription = styled(Wrapper)`
  padding: unset;
  margin-top: ${(props) => props.margin};
`;
