import styled from 'styled-components';
import { HoverEffect } from '../../styledComponents/HoverEffect/HoverEffect';

interface Props {
  width?: string;
  isLogged?: boolean;
}

export const ButtonStyled = styled.button<Props>`
  background-color: #3456f3;
  cursor: pointer;
  ${HoverEffect}

  padding: 9px 20px;

  color: #fff;
  border-radius: 3px;

  &:hover {
    background-color: #2be080;
  }
`;
