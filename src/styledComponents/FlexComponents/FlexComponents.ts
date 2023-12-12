import styled from 'styled-components';

export const FlexComponents = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  justify-content: space-between;
`;
