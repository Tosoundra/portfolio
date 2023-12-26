import styled from 'styled-components';
import { hoverEffect } from '../../assets/utils/styles/hoverEffect';

interface Props {
  width?: string;
  isLogged?: boolean;
}

export const ButtonStyled = styled.button<Props>`
  background-color: #3456f3;
  cursor: pointer;
  ${hoverEffect}

  padding: 9px 20px;

  color: #fff;
  border-radius: 3px;

  &:hover {
    background-color: #2be080;
  }
`;

export const ButtonWithoutEffectStyled = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: inherit;
`;
