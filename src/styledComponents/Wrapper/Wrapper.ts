import styled from 'styled-components';

interface Props {
  color?: string;
  image?: string;
  margin?: string;
}

export const Wrapper = styled.section<Props>`
  padding: 100px 70px;
  background-color: ${({ color }) => color};
`;

export const WrapperDescription = styled(Wrapper)`
  padding: unset;
  margin-top: ${(props) => props.margin};
`;
