import { styled } from 'styled-components';

interface props {
  width?: string;
  height?: string;
  direction: 'row' | 'column';
  'align-items'?: string;
  gap?: string;
}

export const FlexComponents = styled.div<props>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: space-between;
  align-items: ${(props) => props['align-items']};
  gap: ${(props) => props.gap};
`;

export const UserDescriptionFlexComponents = styled(FlexComponents)`
  & > span:last-of-type {
    margin-top: 18px;
    margin-bottom: 26px;
  }
`;
