import styled from 'styled-components';

interface props {
  direction?: string;
}

export const FlexComponents = styled.div<props>`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  justify-content: space-between;
`;
