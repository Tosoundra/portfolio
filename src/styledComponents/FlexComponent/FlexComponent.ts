import { styled } from 'styled-components';

interface props {
  direction: 'row' | 'column';
  gap?: string;
}

export const FlexComponent = styled.div<props>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: space-between;
  gap: ${(props) => props.gap};
`;
